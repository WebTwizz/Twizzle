import React from "react"
import './button.css';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    outlined?: boolean;
    onClick?: () => void;
  }
  
const Button:React.FC<ButtonProps> = ({

    backgroundColor,
    label,
    size,
    outlined,
    ...props}: ButtonProps,) => {
    return (
        <button
        type="button"
        className={outlined?'twizzle-button-outlined':'twizzle-button'}
        style={{ backgroundColor}}
        {...props}
      >
        {label}
      </button>
    )
    
}



export  {Button}