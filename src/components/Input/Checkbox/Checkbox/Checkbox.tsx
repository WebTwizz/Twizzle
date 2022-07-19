import React, { useState } from "react";
import { Typography } from "../../../General/Typography";
import "./checkbox.css";

interface CheckboxProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onCheck?: (value: boolean) => void;
  color?: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onCheck?: (value: boolean) => void;
  color?: string;
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
