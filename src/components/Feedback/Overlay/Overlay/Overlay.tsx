import React, { useState } from "react";
import { StyledOverlay } from "./StyledOverlay";

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
        <StyledOverlay onClick={onClick} style={style} role="overlay">
            {children}
        </StyledOverlay>


     </>
    )
}

export default Overlay;