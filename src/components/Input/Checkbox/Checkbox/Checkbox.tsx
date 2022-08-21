import React, { useContext, useMemo, useState } from "react";
import { Typography } from "../../../General/Typography";
import {
  StyledCheckboxContainer,
  StyledCheckbox,
  StyledCheckboxArea,
  StyledCheckboxText,
} from "./StyledCheckbox";
import { ThemeContext } from "../../../..";
import { greyBackgroundColor } from "../../../constants";

interface CheckboxProps {
  /**
   * The name of the input.
   */
  inputName: string;
  /**
   * The label of the checkbox.
   */
  label?: string;
  /**
   * If the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * If the checkbox is checked.
   */
  checked?: boolean;
  /**
   * onCheck callback function
   */
  onCheck?: (value: boolean) => void;
  /**
   * The color of the checkbox.
   */
  color?: string;
  /**
   * The color of the label.
   */
  labelColor?: string;
  /**
   * The size of the checkbox.
   */
  size?: "small" | "medium" | "large";
  /**
   * The style of the checkbox.
   */
  style?: React.CSSProperties;
}
const Checkbox: React.FC<CheckboxProps> = ({
  inputName,
  label,
  disabled,
  checked = false,
  onCheck,
  color,
  labelColor,
  size = "medium",
  style,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const theme = useContext(ThemeContext);

  const sizeAttributes = useMemo(() => {
    switch (size) {
      case "small":
        return {
          fontSize: "0.8rem",
          height: "0.8rem",
          width: "0.8rem",
          bottom: "-0.1rem",
          right: "0rem",

        };
      case "medium":
        return {
          fontSize: "0.9rem",
          height: "1rem",
          width: "1rem",
          bottom: "-0.15rem",
          right: "0rem",
        };
      case "large":
        return {
          fontSize: "1rem",
          height: "1.2rem",
          width: "1.2rem",
          bottom: "-0.1rem",
          right: "0.1rem",
        };
      };
    }, [size]);


  const defaultColor = useMemo(() => {
    if (disabled) {
      return greyBackgroundColor;
    }
    if(isChecked) {
      return color || theme.primary?.backgroundColor;
    }
    return 'transparent';
  },[disabled, isChecked, color]);

  const defaultTextColor = useMemo(() => {
    if (disabled) {
      return greyBackgroundColor;
    }
    return labelColor || theme.primary?.color;
  },[labelColor, disabled]);

  const border = useMemo(() => {
    if (disabled) {
      return `1px solid ${greyBackgroundColor}`;
    }
    if (isChecked) {
      return color || `1px solid ${theme.primary?.backgroundColor || "transparent"}`;
    }
    return `1px solid ${greyBackgroundColor}`;
  }, [disabled, isChecked, color ]);

  const checkedIcon = useMemo(() => {
    return isChecked ? "'\\2713'" : "";
  } , [isChecked]);

  return (
    <StyledCheckboxContainer>
      <StyledCheckboxArea>
        <StyledCheckbox
          name={inputName}
          type="checkbox"
          checked={isChecked}
          checkedIcon = {checkedIcon}
          onChange={() => {
            setIsChecked(!isChecked);
            onCheck?.(!isChecked);
          }}
          style={{
            border: border,
            ...style,
          }}
          disabled={disabled}
          className={isChecked ? "checked" : ""}
          color={defaultColor}
          height={sizeAttributes.height}
          width={sizeAttributes.width}
          bottom={sizeAttributes.bottom}
          right={sizeAttributes.right}
          checkFontSize={sizeAttributes.height}
        />
        <StyledCheckboxText
          style={{
            color: defaultTextColor,
          }}
          fontSize={sizeAttributes.fontSize}
        >
          {label}
        </StyledCheckboxText>
      </StyledCheckboxArea>
    </StyledCheckboxContainer>
  );
};
export default Checkbox;
