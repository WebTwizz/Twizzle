import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { greyBackgroundColor } from "../../../constants";
import { Typography } from "../../../General/Typography";
import { TextAlert } from "../../../Layout/Alert";
import { StyledInputContainer, StyledTextInput } from "./StyledTextInput";

export interface InputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * The name of the input
   */
  inputName: string;
  /**
   * type of the input
   * @default text
   */
  type?: "text" | "email" | "number" | "tel" | "url" | "search";
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
   * onEnter Callback method
   */
  onEnter?: () => void;
  /**
   * Change styling based on variants that include:
   * ['info', 'success', 'warning', 'danger']
   */
  variant?: "info" | "success" | "warning" | "danger";
  /**
   * Add right icon to the left of the input
   */
  rightIcon?: React.ReactElement;
  /**
   * Add left icon to the left of the input
   */
  leftIcon?: React.ReactElement;
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
   * required input
   * @default false
   */
  required?: boolean;
  /**
   * width size of input
   */
  width?: string;
  /**
   * size of input between the following:
   * ['small', 'medium', 'large']
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
}

export const TextInput: React.FC<InputProps> = ({
  inputName,
  type = "text",
  inputLabel,
  inputLabelDescription,
  errorMessage,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  onEnter,
  disabled,
  required = false,
  width,
  variant,
  rightIcon,
  leftIcon,
  allowClear,
  invalid,
  style,
  size = "medium",
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const theme = useContext(ThemeContext);
  const inputRef = React.createRef<HTMLInputElement>();
  const [inputValue, setInputValue] = useState(value || "");

  const sizeAttributes = {
    small: {
      fontSize: "12px",
      descriptionFontSize: "10px",
      labelMargin: "2px",
      defaultWidth: "25%",
      padding: "5px 10px",
    },
    medium: {
      fontSize: "14px",
      descriptionFontSize: "12px",
      labelMargin: "4px",
      defaultWidth: "35%",
      padding: "10px 15px",
    },
    large: {
      fontSize: "16px",
      descriptionFontSize: "14px",
      labelMargin: "6px",
      defaultWidth: "50%",
      padding: "15px 20px",
    },
  };

  return (
    <Box
      style={{ flexDirection: "column" }}
      onClick={() => inputRef.current?.focus()}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter?.();
        }
      }}
      {...props}
    >
      {inputLabel && (
        <Typography
          variant={"p"}
          bold
          style={{ 
            margin: '0px 2px', 
            marginBottom: sizeAttributes[size].labelMargin,
            fontSize: sizeAttributes[size].fontSize 
          }}
        >
          {inputLabel} {required && <span style={{ color: '#CC3300' }}> *</span>}
        </Typography>
      )}
      {inputLabelDescription && (
        <Typography
          variant={"p"}
          style={{
            margin: '0px 2px', 
            marginBottom: sizeAttributes[size].labelMargin,
            color: "#5c6178",
            fontSize: sizeAttributes[size].descriptionFontSize,
          }}
        >
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
          backgroundColor: disabled ? "#ebebe4" : "white",
          cursor: disabled ? "not-allowed" : "text",
          fontSize: sizeAttributes[size].fontSize,
          padding: sizeAttributes[size].padding,
          width: width || sizeAttributes[size].defaultWidth,
          ...style,
        }}
      >
        {leftIcon}
        <StyledTextInput
          type={type}
          ref={inputRef}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxCount}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        ></StyledTextInput>
        {rightIcon}
        <Box
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {allowClear && inputValue && (
            <TiDelete
              style={{
                color: greyBackgroundColor,
                fontSize: sizeAttributes[size].fontSize,
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
      {errorMessage && invalid && (
        <TextAlert
          variant="danger"
          style={{ margin: "0px" }}
          size={"small"}
        >
          {errorMessage}
        </TextAlert>
      )}
    </Box>
  );
};

export default TextInput;
