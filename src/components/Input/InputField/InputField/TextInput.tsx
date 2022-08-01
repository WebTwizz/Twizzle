import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { greyBackgroundColor } from "../../../constants";
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
   * boolean if border radius should be applied to input
   */
  cornerRadius?: boolean;
   /**
   * width size of input
   */
  width?: string;
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
  errorMessage,
  placeholder,
  value,
  maxCount = 100,
  onChange,
  disabled,
  cornerRadius,
  width,
  variant,
  allowClear,
  invalid,
  style,
  size = "medium",
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const theme = useContext(ThemeContext);
  const inputRef = React.createRef<HTMLInputElement>();
  const [inputValue, setInputValue] = useState(value);

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
    <Box style={{flexDirection: 'column', width}} onClick={() => inputRef.current?.focus()}>
      {inputLabel && 
      <Typography elementType={'p'} bold style={{margin:0, fontSize: sizeAttributes[size].fontSize}}>
        {inputLabel}
      </Typography>}
      {inputLabelDescription && (
        <Typography elementType={'p'} style={{marginTop:sizeAttributes[size].labelMargin, color: '#5c6178', fontSize: sizeAttributes[size].descriptionFontSize}}>
          {inputLabelDescription}
        </Typography>
      )}
      <StyledInputContainer
        style={{
          borderRadius: cornerRadius ? "5px" : "0px",
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
          fontSize:sizeAttributes[size].fontSize,
          width: sizeAttributes[size].defaultWidth,
          padding: sizeAttributes[size].padding,
          ...style,
        }}
      >
        <StyledTextInput
          type="text"
          ref={inputRef}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
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
       <TextAlert variant="danger" style={{margin: '0px'}} size={size === "small"? "small" : "medium"}>{errorMessage}</TextAlert>
      )}
    </Box>
  );
};

export default TextInput;
