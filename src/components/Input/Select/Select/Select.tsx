//create select dropdown component

import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./select.css";
import { greyBackgroundColor } from "../../../constants";

export interface SelectProps{
    value?: string;
    options: string[];
    onSelect?: (value: string) => void;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  value,
  options,
  onSelect,
  disabled,
  ...props
}) => {
  //create custom select textbox with options that float below it

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
  return (
    <div className="container">
      <input
        name="twizzle-selected-value"
        type="hidden"
        id="twizzle-selected-value"
        value={selected}
      />
      <div
        className="twizzle-display-select-value-container"
        onClick={() => (!disabled ? setIsSelecting(!isSelecting) : null)}
        style={{
          border: `0.5px solid ${
            isSelecting ? theme.primary?.backgroundColor : "#E8E8E8"
          }`,
          backgroundColor: disabled ? greyBackgroundColor : "white",
          color: disabled ? "#d5d5d5" : "black",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        {...props}
      >
        <span className="twizzle-display-select-value">{selected}</span>
        {!isSelecting ? (
          <BsChevronDown className="twizzle-select-arrow arrow-down" />
        ) : (
          <BsChevronUp className="twizzle-select-arrow arrow-up" />
        )}
      </div>
      <ul
        className="twizzle-select-container"
        id="selectContainer"
        style={{
          visibility: isSelecting ? "visible" : "hidden",
        }}
      >
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="twizzle-select-option"
              id={option}
              value={option}
              onClick={(e) => {
                handleSelect(e.currentTarget.innerText);
              }}
            >
              <span className="item-text" id={option}>
                {option}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
