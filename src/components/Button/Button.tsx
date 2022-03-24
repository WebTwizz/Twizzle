import React from "react"
import './button.css';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    label: string;
    outlined?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties
  }
  
const Button:React.FC<ButtonProps> = ({

    backgroundColor,
    label,
    outlined,
    style,
    disabled,
    ...props}: ButtonProps,) => {
    return (
        <button
        type="button"
        className={`${outlined?'twizzle-button-outlined':'twizzle-button'}${disabled?'-disabled':''}`}
        {...props}
        style={{...style}}
        disabled={disabled}
      >
        {label}
      </button>
    )
    
}



export  {Button}