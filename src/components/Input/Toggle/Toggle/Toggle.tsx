import React, { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import {
  StyledToggle,
  StyledToggleInput,
  StyledToggleInputLabel,
} from "./StyledToggle";
interface ToggleProps {
  /**
   * The label of the toggle
   */
  label?: string;
  /**
   * Disable the toggle
   */
  disabled?: boolean;
  /**
   * Toggle the element
   */
  toggled?: boolean;
  /**
   * custom color for the toggle
   */
  color?: string;
  /**
   * onToggle callback function
   */
  onToggle?: () => void;
  onChange?: () => void;
  /**
   * The size of the avatar out of the following options:
   * small, medium, large
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * custom style for the toggle
   */
  style?: React.CSSProperties;
}
const Toggle: React.FC<ToggleProps> = ({
  label,
  disabled,
  size = "medium",
  style,
  toggled = false,
  onChange,
  onToggle,
  color,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const [toggledState, setToggledState] = useState<boolean>(toggled);

  const sizeAttributes = {
    small: {
      width: "30px",
      height: "15px",
      toggleSize: "10px",
    },
    medium: {
      width: "40px",
      height: "20px",
      toggleSize: "15px",
    },
    large: {
      width: "50px",
      height: "25px",
      toggleSize: "20px",
    },
  };
  return (
    <StyledToggle id="twizzle-toggle-switch" role="switch" aria-label="Toggle">
      <StyledToggleInput
        value={toggledState.toString()}
        disabled={disabled}
        type="checkbox"
        id="twizzle-toggle"
        {...props}
        onChange={() => { onChange && onChange(); setToggledState(!toggledState); }}
      />
      <StyledToggleInputLabel
        htmlFor="twizzle-toggle"
        style={{
          backgroundColor: toggledState
            ? color || theme.primary?.backgroundColor
            : "#D3D3D3",
          height: sizeAttributes[size]?.height,
          width: sizeAttributes[size]?.width,
          ...style,
        }}
        toggleSize={sizeAttributes[size]?.toggleSize}
      ></StyledToggleInputLabel>
    </StyledToggle>
  );
};

export default Toggle;
