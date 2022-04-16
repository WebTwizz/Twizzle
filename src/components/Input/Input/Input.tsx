//create a simple input text box

import { getValue } from "@testing-library/user-event/dist/utils";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import {TiDelete} from 'react-icons/ti'
export interface InputProps {
  characterCount?: boolean;
  maxCount?: number;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "info" | "success" | "warning" | "danger";
  allowClear?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  characterCount,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  variant,
  allowClear,
  disabled,
  style,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const theme = useContext(ThemeContext);

  console.log(allowClear)
  return (
    <div
      className="twizzle-input-text-container"
      style={{
        border: `0.5px solid ${hover ? variant? theme?.variants?.[variant]?.color: theme.primary?.backgroundColor : "#E8E8E8"}`,
        backgroundColor: disabled ? "#e9e9e9" : "white",
        cursor: disabled ? "not-allowed" : "text",
        ...style,
      }}
    >
      <input
        type="text"
        className="twizzle-input-text"
        placeholder={placeholder}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        value={inputValue}
        maxLength={maxCount}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? "#e9e9e9" : "white",
        }}
        {...props}
      />
      {characterCount && (
        <>
        <span
          className="twizzle-input-text-character-count"
          style={{
            color: "#d5d5d5",
            fontSize:'1.2em'
          }}
        >
          {inputValue?.length}/{maxCount}
        </span>
       
        </>
      )}
      { allowClear &&  inputValue && <TiDelete className={'twizzle-input-text-clear'} onClick={()=>{setInputValue('')}} />}
    </div>
  );
};

export default Input;
