//create select dropdown component

import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { greyBackgroundColor } from "../../../constants";
import {
  StyledSelectContainer,
  StyledSelectInput,
  StyledSelectInputContainer,
  StyledSelectInputOption,
  StyledSelectInputValue,
} from "./StyledSelect";

export interface SelectProps {
  /**
   * The name of the input
   */
  inputName: string;
  /**
   * Value of the select
   */
  value?: string;
  /**
   * Options of the select
   */
  options: string[];
  /**
   * the width of the select
   */
  width?: string;
  /**
   * Size of the select
   * ['small', 'medium', 'large']
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * onSelect callback function
   */
  onSelect?: (value: string) => void;
  /**
   * disabled state of the select
   */
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  inputName,
  value,
  options,
  onSelect,
  size = "medium",
  width,
  disabled,
  ...props
}) => {
  const [selected, setSelected] = useState(value || options[0]);
  const [isSelecting, setIsSelecting] = useState(false);
  const theme = useContext(ThemeContext);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsSelecting(false);
    if (onSelect) {
      onSelect(value);
    }
  };

  const sizeAttributes = {
    small: {
      fontSize: "12px",
      defaultWidth: "25%",
      padding: "5px 10px",
      optionsPadding: "5px 7px",
      marginTop: '5px',
    },
    medium: {
      fontSize: "14px",
      defaultWidth: "35%",
      padding: "10px 15px",
      optionsPadding: "5px 10px",
      marginTop: '5px',
    },
    large: {
      fontSize: "16px",
      defaultWidth: "50%",
      padding: "15px 20px",
      optionsPadding: "5px 14px",
      marginTop: '5px',
    },
  };

  return (
    <>
      <StyledSelectInput name={inputName} type="hidden" value={selected} role="hidden-select"/>
      <StyledSelectInputContainer
        role="select"
        onClick={() => (!disabled ? setIsSelecting(!isSelecting) : null)}
        style={{
          border: `0.5px solid ${
            isSelecting ? theme.primary?.backgroundColor : "#E8E8E8"
          }`,
          backgroundColor: disabled ? greyBackgroundColor : "white",
          color: disabled ? "#d5d5d5" : "black",
          cursor: disabled ? "not-allowed" : "pointer",
          padding: sizeAttributes[size].padding,
          fontSize: sizeAttributes[size].fontSize,
          width: width || sizeAttributes[size].defaultWidth,
        }}
        {...props}
      >
        <StyledSelectInputValue>{selected}</StyledSelectInputValue>
        {!isSelecting ? (
          <BsChevronDown style={{marginRight: '5px'}} className="twizzle-select-arrow arrow-down" />
        ) : (
          <BsChevronUp style={{marginRight: '5px'}} className="twizzle-select-arrow arrow-up" />
        )}
      </StyledSelectInputContainer>
      <StyledSelectContainer
        id="selectContainer"
        style={{
          visibility: isSelecting ? "visible" : "hidden",
          width: width || sizeAttributes[size].defaultWidth,
          fontSize: sizeAttributes[size].fontSize,
          padding: sizeAttributes[size].optionsPadding,
          marginTop: sizeAttributes[size].marginTop,
        }}
      >
        {options.map((option, index) => {
          return (
            <StyledSelectInputOption
              key={index}
              className="twizzle-select-option"
              id={option}
              value={option}
              onClick={(e) => {
                handleSelect(e.currentTarget.innerText);
              }}
            >
              <StyledSelectInputValue id={option}>
                {option}
              </StyledSelectInputValue>
            </StyledSelectInputOption>
          );
        })}
      </StyledSelectContainer>
    </>
  );
};

export default Select;
