import React, { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../../..";
import { Box } from "../../../Box/Box";
import { greyBackgroundColor } from "../../../constants";
import {
  StyledChecked,
  StyledRadio,
  StyledRadioContainer,
} from "./StyledRadio";

type option = {
  label: string;
  value: string;
};

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The name of the input.
   */
  inputName: string;
  /**
   * If the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * onCheck callback function
   */
  onCheck?: () => void;
  /**
   * The color of the checkbox.
   */
  color?: string;
  /**
   * The color of the label.
   */
  labelColor?: string;
  /**
   * If the radio is checked.
   */
  value?: option;
  /**
   * The size of the checkbox.
   */
  size?: "small" | "medium" | "large";
  /**
   * orientation of the radio group
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Options array for a radio.
   */
  options: option[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  inputName,
  disabled,
  onCheck,
  color,
  labelColor,
  value,
  size = "medium",
  orientation = "vertical",
  options,
  style,
  ...props
}) => {
  const sizeAttributes = useMemo(() => {
    switch (size) {
      case "small":
        return {
          fontSize: "0.8rem",
          padding: "0.075rem 1.5rem",
          top: "2px",
          left: "2px",
          width: "0.8rem",
          height: "0.8rem",
          checkedWidth: "0.45rem",
          checkedHeight: "0.45rem",
        };
      case "medium":
        return {
          fontSize: "0.9rem",
          padding: "0.1rem 1.75rem",
          top: "2.5px",
          left: "2.5px",
          width: "1rem",
          height: "1rem",
          checkedWidth: "0.6rem",
          checkedHeight: "0.6rem",
        };
      case "large":
        return {
          fontSize: "1rem",
          padding: "0.125rem 2rem",
          top: "2.5px",
          left: "2.5px",
          width: "1.2rem",
          height: "1.2rem",
          checkedWidth: "0.75rem",
          checkedHeight: "0.75rem",
        };
    }
  }, [size]);

  const theme = useContext(ThemeContext);

  const defaultValue = useMemo(() => {
    return value;
  } , [value]);

  const [isChecked, setIsChecked] = useState(defaultValue || null);
  console.log(value);

  const defaultColor = useMemo(() => {
    if (disabled) {
      return greyBackgroundColor;
    }
    return color || theme.primary?.backgroundColor || "#fff";
  }, [disabled, color]);

  const defaultLabelColor = useMemo(() => {
    if (disabled) {
      return greyBackgroundColor;
    }
    return labelColor || "#000";
  }, [disabled, labelColor]);


  return (
    <Box style={{ flexDirection: orientation == 'horizontal' ? 'row' : 'column', ...style}} {...props}>
      {options.map((option, index) => {
        return (
          <Box className="radio" key={index}>
            <StyledRadioContainer
              className="container"
              style={{
                fontSize: sizeAttributes.fontSize,
                padding: sizeAttributes.padding,
                color: defaultLabelColor,
              }}
            >
              {option.label}
              <StyledRadio
                checked={isChecked?.value === option.value}
                disabled={disabled}
                type="radio"
                name={inputName}
                value={option.value}
                onChange={() => {
                  setIsChecked(option);
                  onCheck?.();
                }}
              />
              <StyledChecked
                className="checkmark"
                color={defaultColor}
                borderColor={isChecked === option ? defaultColor : "#e9e9e9"}
                top={sizeAttributes.top}
                left={sizeAttributes.left}
                width={sizeAttributes.width}
                height={sizeAttributes.height}
                checkedWidth={sizeAttributes.checkedWidth}
                checkedHeight={sizeAttributes.checkedHeight}
              />
            </StyledRadioContainer>
          </Box>
        );
      })}
    </Box>
  );
};

export default RadioGroup;
