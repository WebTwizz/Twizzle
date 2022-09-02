
import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { Typography } from "../../../General/Typography";
import { TextAlert } from "../../../Layout/Alert";
import {
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTextAreaDeleteButton,
} from "./StyledTextArea";
import { InputProps } from "./TextInput";

interface TextAreaProps extends InputProps {
  /**
   * The textarea's max count
   * @default 1000
   */
  maxCount?: number;
  /**
   * Display textarea's character count
   */
  characterCount?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  inputName,
  inputLabel,
  inputLabelDescription,
  errorMessage,
  placeholder,
  value,
  characterCount,
  maxCount = 1000,
  onChange,
  disabled,
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
  const inputRef = React.createRef<HTMLTextAreaElement>();
  const [inputValue, setInputValue] = useState(value);

  const sizeAttributes = {
    small: {
      fontSize: "12px",
      descriptionFontSize: "10px",
      labelMargin: "2px",
      defaultWidth: "25%",
    },
    medium: {
      fontSize: "14px",
      descriptionFontSize: "12px",
      labelMargin: "4px",
      defaultWidth: "35%",
    },
    large: {
      fontSize: "16px",
      descriptionFontSize: "14px",
      labelMargin: "6px",
      defaultWidth: "50%",
    },
  };

  return (
    <Box style={{flexDirection: 'column', width}} onClick={() => inputRef.current?.focus()}>
      {inputLabel && 
      <Typography variant={'p'} bold style={{margin:0, fontSize: sizeAttributes[size].fontSize}}>
        {inputLabel}
      </Typography>}
      {inputLabelDescription && (
        <Typography variant={'p'} style={{marginTop:sizeAttributes[size].labelMargin, color: '#5c6178', fontSize: sizeAttributes[size].descriptionFontSize}}>
          {inputLabelDescription}
        </Typography>
      )}
    <StyledTextAreaContainer
      style={{
        width: width || sizeAttributes[size].defaultWidth,
        border: `0.5px solid ${
          invalid
            ? "#b22222"
            : hover
            ? variant
              ? theme?.variants?.[variant]?.color
              : theme.primary?.backgroundColor
            : "#E8E8E8"
        }`,
        fontSize: sizeAttributes[size].fontSize,
        backgroundColor: disabled ? "#ebebe4" : "white",
        cursor: disabled ? "not-allowed" : "text",
        ...style,
      }}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <StyledTextArea
        name={inputName}
        value={inputValue}
        maxLength={maxCount}
        placeholder={placeholder}
        disabled={disabled}
        ref={inputRef}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange?.(e.target.value);
        }}
        style={{
          fontSize: sizeAttributes[size].fontSize,
          
        }}
      ></StyledTextArea>
      <Box
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
      }}
      >
        {allowClear && (
          <StyledTextAreaDeleteButton
            onClick={() => {
              setInputValue("");
              onChange?.("");
            }}
          >
            <TiDelete />
          </StyledTextAreaDeleteButton>
        )}
        {characterCount && (
          <Box
            style={{
              fontSize: sizeAttributes[size].descriptionFontSize,
              color: disabled ? "#b2b2b2" : "#b2b2b2",
            }}
          >
            {inputValue?.length}/{maxCount}
          </Box>
        )}
      </Box>
    </StyledTextAreaContainer>
    {errorMessage && invalid && (
       <TextAlert variant="danger" style={{margin: '0px'}} size={size === "small"? "small" : "medium"}>{errorMessage}</TextAlert>
      )}
    </Box>
  );
};

export default TextArea;
