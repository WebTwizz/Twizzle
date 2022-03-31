import React from "react"

interface DividerProps {
    dashed?: boolean;
    orientation: 'horizontal' | 'vertical';
    margin?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  
const Divider:React.FC<DividerProps> = ({
    dashed,
    orientation,
    margin,
    style,
    children,
    ...props}: DividerProps,) => {
    return (
        <>
            {orientation === "horizontal" && 
            <div 
                style={{
                    display: "inline-block",
                    width: "100%",
                    borderLeft: "6px solid green",
                }}>
                    {children}
            </div>}
        </>
    )
    
}



export  {Divider}