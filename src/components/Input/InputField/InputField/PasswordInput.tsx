import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { Typography } from "../../../General/Typography";
import { TextAlert } from "../../../Layout/Alert";
import { StyledInputContainer, StyledTextInput } from "./StyledTextInput";
import { InputProps } from "./TextInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { greyBackgroundColor } from "../../../constants";

//extend InputProps interface without onEnter property
interface PasswordInputProps extends Omit<InputProps, 'onEnter'>{
  /**
   * Display button to see password
   * @default true
   */
  showPasswordIcon?: boolean;
  /**
   * Change input type to text
   */
  inputType?: 'text' | 'password';
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  inputName,
  inputLabel,
  inputLabelDescription,
  errorMessage,
  placeholder,
  width,
  value,
  maxCount = 100,
  onChange,
  required,
  disabled,
  variant,
  invalid,
  style,
  showPasswordIcon = true,
  inputType = 'password',
  size = "medium",
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const theme = useContext(ThemeContext);
  const inputRef = React.createRef<HTMLInputElement>();
  const [type, setType] = useState(inputType);

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
      boxStyles={{ flexDirection: "column", ...style }}
      onClick={() => inputRef.current?.focus()}
      {...props}
    >
      {inputLabel && (
        <Typography
          variant={"p"}
          bold
          style={{margin: '0px 2px', fontSize: sizeAttributes[size].fontSize }}
        >
        {inputLabel} {required && <span style={{ color: '#CC3300' }}> *</span>}
        </Typography>
      )}
      {inputLabelDescription && (
        <Typography
          variant={"p"}
          style={{
            margin: '0px 2px',
            marginTop: sizeAttributes[size].labelMargin,
            color: "#5c6178",
            fontSize: sizeAttributes[size].descriptionFontSize,
          }}
        >
          {inputLabelDescription}
        </Typography>
      )}
      <StyledInputContainer
        styleOverrides={{
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
          width: width || sizeAttributes[size].defaultWidth,
          padding: sizeAttributes[size].padding,
        }}
      >
        <StyledTextInput
          type={type === 'text' ? 'text' : 'password'}
          ref={inputRef}
          name={inputName}
          role="password"
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxCount}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        ></StyledTextInput>
        <Box
          boxStyles={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showPasswordIcon &&
            (type === "password" ? (
              <AiFillEyeInvisible
                style={{
                  color: greyBackgroundColor,
                  fontSize: sizeAttributes[size].fontSize,
                  cursor: "pointer",
                }}
                onClick={() => { setType('text'); }}
              />
            ) : (
              <AiFillEye
                style={{
                  color: greyBackgroundColor,
                  fontSize: sizeAttributes[size].fontSize,
                  cursor: "pointer",
                }}
                onClick={() => { setType('password'); }}
              />
            ))}
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

export default PasswordInput;
