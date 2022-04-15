import { useState } from "react";
import './backdrop.css';

interface BackDropProps {
    children?: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;

}
const BackDrop: React.FC<BackDropProps> = (
{   children, 
    onClick,
    style,
}
) => {
    
    return (
     <>
        <div className="twizzle-backdrop" onClick={onClick} style={style}>
            <div className="twizzle-backdrop-content" onClick={onClick} style={style}>
            {children}
            </div>
        </div>


     </>
    )
}

export {BackDrop};