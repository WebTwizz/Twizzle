//create a tooltip component

import { useState } from "react";

export enum TooltipPosition {
  top,
  bottom,
  left,
  right,
}

interface TooltipProps {
  position: TooltipPosition;
  children?: React.ReactNode;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  position = TooltipPosition.top,
  visible,
  children,
}: TooltipProps) => {

    const [visibility, setVisibility] = useState(false);
  return (
    <div 
    className={`twizzle-tooltip`}
    onMouseEnter={()=>setVisibility(true)}
    onMouseLeave={()=>setVisibility(false)}
    style={{
        position: 'relative',
        width:'fit-content',
    }}
    >
        {children}
      <span 
      className={`twizzle-tooltip-${position}`} 
      style={{
        visibility: visibility? 'visible' : 'hidden',
        transition: 'visibility 0.25s linear',
        position: 'absolute',
        color: '#fff',
        backgroundColor: '#364859',
        padding: '8px',
        borderRadius: '4px',
        fontSize: '1em',
        fontFamily: 'sans-serif',
      }}>
       sample
      </span>
    </div>
  );
};

export default Tooltip;
