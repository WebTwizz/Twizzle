import { useState } from "react";
import './overlay.css';

interface BackDropProps {
    children?: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;

}
const Overlay: React.FC<BackDropProps> = (
{   children, 
    onClick,
    style,
}
) => {
    
    return (
     <>
        <div className="twizzle-overlay" onClick={onClick} style={style}>
            <div className="twizzle-overlay-content" onClick={onClick} style={style}>
            {children}
            </div>
        </div>


     </>
    )
}

export default Overlay;