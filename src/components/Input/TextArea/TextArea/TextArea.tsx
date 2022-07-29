import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { greyBackgroundColor } from "../../../constants";
import { InputProps } from "../../InputField/InputField/TextInput";
import './textarea.css';


export const TextArea: React.FC<InputProps> = ({
  characterCount,
  inputName,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  disabled,
  variant,
  allowClear,
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
      // border: `0.5px solid ${hover ? variant? theme?.variants?.[variant]?.color: theme.primary?.backgroundColor : "#E8E8E8"}`,
      backgroundColor: disabled ? greyBackgroundColor : "white",
      cursor: disabled ? "not-allowed" : "text",
      ...style,
    }}
    >
      <textarea
      className="twizzle-input-textarea"
      name={inputName}
      placeholder={placeholder}
      style={{
        border:'none',
        backgroundColor: disabled ? greyBackgroundColor : "white",
        cursor: disabled ? "not-allowed" : "text",
      }}
      value={inputValue}
      disabled={disabled}
      maxLength={maxCount}
      onChange={(e) => {
        setInputValue(e.target.value);
        if (onChange) {
          onChange(e.target.value);
        }
      }}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
        {...props}
        >
        {inputValue}
        </textarea>
        <div
        style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",

        }}
        >

        { allowClear &&  inputValue && <TiDelete className={'twizzle-input-textarea-clear'} onClick={()=>{setInputValue('')}} role="textdelete"/>}
        {characterCount && (
        <span
          className="twizzle-input-text-character-count"
          style={{
            color: "#d5d5d5",
            marginLeft:'auto',
            marginTop:'auto',
            backgroundColor: disabled ? greyBackgroundColor : "white",
          }}
        >
          {inputValue?.length}/{maxCount}
        </span>
      )}
      </div>
     
    </div>
  );
};

export default TextArea;
