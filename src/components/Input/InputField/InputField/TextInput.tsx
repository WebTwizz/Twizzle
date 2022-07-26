import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { Typography } from "../../../General/Typography";
import { TextAlert } from "../../../Layout/Alert";
import { smallDangerAlertSVG } from "../../../Layout/Alert/Alert/svg";
import { StyledInputContainer, StyledTextInput } from "./StyledTextInput";

export interface InputProps {
  /**
   * The name of the input
   */
  inputName: string;
  /**
   * Label for the input
   */
  inputLabel?: string;
  /**
   * Label description for the input
   */
  inputLabelDescription?: string;
   /**
   * hint for the input
   */
  errorMessage?: string;
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
   * invalidate input
   */
  invalid?: boolean;
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
  inputLabel,
  inputLabelDescription,
  errorMessage: validationError,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  disabled,
  variant,
  allowClear,
  invalid,
  style,
  size = "medium",
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const theme = useContext(ThemeContext);
  return (
    <Box style={{flexDirection: 'column'}}>
      {inputLabel && 
      <Typography elementType={size == "small"? 6: 5 } style={{padding: '4px'}}>
        {inputLabel}
      </Typography>}
      {inputLabelDescription && (
        <Typography elementType={'p'} style={{padding: '2px 4px', color: '#848482', fontSize: "small"? "0.75em": size == "large"? "1em" : "0.875em"}}>
          {inputLabelDescription}
        </Typography>
      )}
      <StyledInputContainer
        style={{
          border: `0.5px solid ${
            invalid
              ? "#b22222"
              : hover
              ? variant
                ? theme?.variants?.[variant]?.color
                : theme.primary?.backgroundColor
              : "#E8E8E8"
          }`,
          backgroundColor: disabled ? "#e9e9e9" : "white",
          cursor: disabled ? "not-allowed" : "text",
          fontSize:
            size === "small" ? "12px" : size === "large" ? "16px" : "14px",
          width: size === "small" ? "25%" : size === "large" ? "50%" : "35%",
          padding:
            size === "small"
              ? "5px 10px"
              : size === "large"
              ? "10px 20px"
              : "10px 15px",
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
        ></StyledTextInput>
        <Box
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {allowClear && inputValue && (
            <TiDelete
              style={{
                color: "#e9e9e9",
                fontSize:
                  size === "small"
                    ? "15px"
                    : size === "large"
                    ? "16px"
                    : "14px",
                cursor: "pointer",
              }}
              onClick={() => {
                setInputValue("");
              }}
              role="textdelete"
            />
          )}
        </Box>
      </StyledInputContainer>
      {validationError && invalid && (
       <TextAlert variant="danger" size={size === "small"? "small" : "medium"}>{validationError}</TextAlert>
      )}
    </Box>
  );
};

export default TextInput;
