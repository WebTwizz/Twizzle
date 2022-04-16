//create a simple input text box

import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { InputProps } from "../Input/Input";
import './textarea.css';

export interface TextAreaProps extends InputProps{
  rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  characterCount,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  disabled,
  style,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const theme = useContext(ThemeContext);
  return (
    <div
      className="twizzle-input-textarea-container"
      style={{
        border: `0.5px solid ${
          hover ? theme.primary?.backgroundColor : "#E8E8E8"
        }`,
        backgroundColor: disabled ? "#e9e9e9" : "white",
        cursor: disabled ? "not-allowed" : "text",
        ...style,
      }}
    >
      <TextArea
        placeholder={placeholder}
        {...props}
      />
      {characterCount && (
        <span
          className="twizzle-input-text-character-count"
          style={{
            color: "#d5d5d5",
          }}
        >
          {inputValue?.length}/{maxCount}
        </span>
      )}
    </div>
  );
};

export default TextArea;
