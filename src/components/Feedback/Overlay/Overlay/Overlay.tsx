import React from "react";
import { useState } from "react";
import './overlay.css';

interface BackDropProps {

    /**
     * Children to be rendered inside the backdrop
     */
    children?: React.ReactNode;
    /**
     * onClick handler for the backdrop
     */
    onClick?: () => void;
    /**
     * Styling added to the backdrop
    */
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
        <div className="twizzle-overlay" onClick={onClick} style={style} role="overlay">
            <div className="twizzle-overlay-content">
            {children}
            </div>
        </div>


     </>
    )
}

export default Overlay;