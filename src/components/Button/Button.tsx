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
    icon?:React.ReactNode;
    corner?: 'default' | 'round';
    style?: React.CSSProperties
  }
  
const Button:React.FC<ButtonProps> = ({

    backgroundColor,
    label,
    outlined,
    style,
    disabled,
    loading,
    icon,
    corner,
    ...props}: ButtonProps,) => {
    return (
        <button
        type="button"
        className={`${outlined?'twizzle-button-outlined':'twizzle-button'}${disabled?'-disabled':''}`}
        {...props}
        style={{...style, borderRadius:corner==='round'? '30px':'5px'}}
        disabled={disabled}
      >
        <div style={{
          display:'inline-flex',
          alignItems:'center',
        }}>
          {loading && <div className="loader"/>}
          {icon && <div className="icon">{icon}</div>}
          {label}
        </div>
      </button>
    )
    
}



export  {Button}