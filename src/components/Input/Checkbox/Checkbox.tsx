import React, { useState } from 'react';
import './checkbox.css';

interface CheckboxProps {
    label: string;
    disabled?: boolean;
    checked?: boolean;
    onCheck?: (value: boolean) => void;
    color?: string;
    style?: React.CSSProperties;
}
const Checkbox:React.FC<CheckboxProps> = ({
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
        <input type="checkbox" 
        id="twizzle-checkbox"
        style={{
            backgroundColor: 'yellow',
            ...style,
        }}
        disabled={disabled}
        checked={isChecked}
        onClick={(e) => {handleCheckboxChange(e)}}
        />    
    )



}

export {Checkbox};