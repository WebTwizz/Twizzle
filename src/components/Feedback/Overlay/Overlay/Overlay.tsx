import React, { useState } from "react";
import { StyledOverlay } from "./StyledOverlay";

interface BackDropProps extends React.HTMLAttributes<HTMLDivElement>{

    /**
     * Children to be rendered inside the backdrop
     */
    children?: React.ReactNode;
    /**
     * onClick handler for the backdrop
     */
    onClick?: () => void;
}
const Overlay: React.FC<BackDropProps> = (
{   children, 
    onClick,
    style,
    ...props
}
) => {
    
    return (
     <>
        <StyledOverlay onClick={onClick} style={style} role="overlay" {...props}>
            {children}
        </StyledOverlay>


     </>
    )
}

export default Overlay;