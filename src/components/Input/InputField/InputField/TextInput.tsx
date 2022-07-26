import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import './input.css';
import { StyledInputContainer, StyledTextInput } from "./StyledTextInput";

export interface InputProps {
  /**
   * The name of the input
   */
  inputName: string;
  /**
   * display character count
   */
  characterCount?: boolean;
  /**
   * limit character count to a certain number
   */
  maxCount?: number;
  /**
   * display placeholder in input
   */
  placeholder?: string;
  /**
   * give a default value to the input
   */
  value?: string;
  /**
   * onChange Callback method
   */
  onChange?: (value: string) => void;
  /**
   * Change styling based on variants that include:
   * ['info', 'success', 'warning', 'danger']
   */
  variant?: "info" | "success" | "warning" | "danger";
  /**
   * Display button to clear text
   */
  allowClear?: boolean;
  /**
   * disable text input
   */
  disabled?: boolean;
  /**
   * Add customs styling
   */
  style?: React.CSSProperties;
  /**
   * size of input between the following:
   * ['small', 'medium', 'large']
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
}


export const TextInput: React.FC<InputProps> = ({
  inputName,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  disabled,
  variant,
  allowClear,
  style,
  size = "medium",
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const theme = useContext(ThemeContext);
  return (
    <StyledInputContainer
    style={{
      border: `0.5px solid ${hover ? variant? theme?.variants?.[variant]?.color: theme.primary?.backgroundColor : "#E8E8E8"}`,
      backgroundColor: disabled ? "#e9e9e9" : "white",
      cursor: disabled ? "not-allowed" : "text",
      fontSize: size === "small" ? "12px" : size === "large" ? "16px" : "14px",
      width: size==="small" ? "15%" : size==="large" ? "50%" : "30%",
      padding: size==="small" ? "5px 10px" : size==="large" ? "10px 20px" : "10px 15px",
      ...style,
    }}
    >
      <StyledTextInput
      type="text"
      name={inputName}
      placeholder={placeholder}
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
        </StyledTextInput>
        <Box style={{
          alignItems: "center",
          justifyContent: "center",
        }}>

      { allowClear &&  inputValue && <TiDelete style={{
        color: '#e9e9e9',
        fontSize: size === "small" ? "15px" : size === "large" ? "16px" : "14px",
        cursor: "pointer",
      }}
        onClick={()=>{setInputValue('')}} role="textdelete"/>}

      </Box>
     
    </StyledInputContainer>
  );
};

export default TextInput;
