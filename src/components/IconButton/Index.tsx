import React from "react"
import './button.css';

interface IconButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    label: string;
    outlined?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties
  }
  
const IconButton:React.FC<IconButtonProps> = ({

    backgroundColor,
    label,
    outlined,
    style,
    disabled,
    ...props}: IconButtonProps,) => {
    return (
       <img>
       
      </img>
    )
    
}



export  {IconButton}