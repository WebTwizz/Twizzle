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
  size,
  style,
  toggled = false,
  onToggle,
  color,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const [toggledState, setToggledState] = useState(toggled);


  const handleToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setToggledState(e.target.checked);
    if (onToggle) {
       onToggle?.();
      }
  }, []);
  return (
    <StyledToggle id="twizzle-toggle-switch" role="switch" aria-label="Toggle">
      <StyledToggleInput
        checked={toggledState}
        disabled={disabled}
        type="checkbox"
        id="twizzle-toggle"
        {...props}
        onChange={(e) => handleToggle(e)}
      />
      <StyledToggleInputLabel
        htmlFor="twizzle-toggle"
        style={{
          backgroundColor: toggledState
            ? color || theme.primary?.backgroundColor
            : "#D3D3D3",
          ...style,
        }}
      ></StyledToggleInputLabel>
    </StyledToggle>
  );
};

export default Toggle;
