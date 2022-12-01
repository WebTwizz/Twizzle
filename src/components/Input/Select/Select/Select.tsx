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

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
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
  style,
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
      defaultHeight: "25px",
      padding: "0px 8px",
      valuePaddding: "0px",
      marginTop: "5px",
    },
    medium: {
      fontSize: "14px",
      defaultWidth: "35%",
      defaultHeight: "35px",
      padding: "5px 6px",
      valuePaddding: "15px",
      marginTop: "5px",
    },
    large: {
      fontSize: "16px",
      defaultWidth: "50%",
      defaultHeight: "45px",
      padding: "10px 8px",
      valuePaddding: "20px",
      marginTop: "5px",
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: width || sizeAttributes[size].defaultWidth,
      }}
    >
      <StyledSelectInput
        name={inputName}
        type="hidden"
        value={selected}
        role="hidden-select"
        {...props}
      />
      <StyledSelectInputContainer
        role="select"
        onClick={() => (!disabled ? setIsSelecting(!isSelecting) : null)}
        styleOverrides={{
          border: `0.5px solid ${
            isSelecting ? theme.primary?.backgroundColor : "#E8E8E8"
          }`,
          backgroundColor: disabled ? greyBackgroundColor : "white",
          color: disabled ? "#d5d5d5" : "black",
          cursor: disabled ? "not-allowed" : "pointer",
          height: sizeAttributes[size].defaultHeight,
          fontSize: sizeAttributes[size].fontSize,
          ...style,
        }}
      >
        <StyledSelectInputValue
          styleOverrides={{
            padding: sizeAttributes[size].padding,
          }}
        >
          {selected}
        </StyledSelectInputValue>
        {!isSelecting ? (
          <BsChevronDown
            style={{ marginRight: "5px" }}
            className="twizzle-select-arrow arrow-down"
          />
        ) : (
          <BsChevronUp
            style={{ marginRight: "5px" }}
            className="twizzle-select-arrow arrow-up"
          />
        )}
      </StyledSelectInputContainer>
      <StyledSelectContainer
        id="selectContainer"
        styleOverrides={{
          visibility: isSelecting ? "visible" : "hidden",
          fontSize: sizeAttributes[size].fontSize,
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
              <StyledSelectInputValue
                id={option}
                styleOverrides={{ padding: sizeAttributes[size].valuePaddding }}
              >
                {option}
              </StyledSelectInputValue>
            </StyledSelectInputOption>
          );
        })}
      </StyledSelectContainer>
    </div>
  );
};

export default Select;
