import React, { useState } from "react";
import { Typography } from "../../../General/Typography";
import "./checkbox.css";

interface CheckboxProps {
  /**
   * Label for the checkbox
   */
  label: string;
  /**
   * If true, the checkbox will be disabled
   */
  disabled?: boolean;
  /**
   * If true, the checkbox will be checked
   */
  checked?: boolean;
  /**
   * onCheck handler for the checkbox
   */
  onCheck?: (value: boolean) => void;
  /**
   * Color of the checkbox, otherwise it will default to the theme color
   */
  color?: string;
  /**
   * Styling added to the checkbox
   */
  style?: React.CSSProperties;
}
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  checked = false,
  onCheck,
  style,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckboxChange = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
    if (onCheck) {
      onCheck(e.currentTarget.checked);
    }
  };
  return (
    <div id="twizzle-checkbox-container" style={{display:"flex", alignItems:'center', padding:'10px'}}>
      <input
        type="checkbox"
        id="twizzle-checkbox"
        style={{
          backgroundColor: "yellow",
          marginRight: "10px",
          ...style,
        }}
        disabled={disabled}
        checked={isChecked}
        onClick={(e) => {
          handleCheckboxChange(e);
        }}
      />
      <Typography elementType={'p'}> {label} </Typography>
    </div>
  );
};

export default Checkbox;
