import React from "react"
import './button.css';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    label: string;
    outlined?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    loading?:boolean;
    style?: React.CSSProperties
  }
  
const Button:React.FC<ButtonProps> = ({

    backgroundColor,
    label,
    outlined,
    style,
    disabled,
    loading,
    ...props}: ButtonProps,) => {
    return (
        <button
        type="button"
        className={`${outlined?'twizzle-button-outlined':'twizzle-button'}${disabled?'-disabled':''}`}
        {...props}
        style={{...style}}
        disabled={disabled}
      >
        <div style={{
            display:"flex"
        }}>
          {loading && <div className="loader"/>}
          {label}
        </div>
      </button>
    )
    
}



export  {Button}