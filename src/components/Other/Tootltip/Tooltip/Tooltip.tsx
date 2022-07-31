import React, { useState } from "react";
import { StyledTooltip, StyledTooltipContainer } from "./StyledTooltip";

interface TooltipProps {
  /**
   * position of the tooltip
   */
  position: 'TOP' | 'BOTTOM';
  /**
   * text to be rendered inside the tooltip
   */
   tooltipText: string;
  /**
   * content of the tooltip
   */
  children?: React.ReactNode;
  /**
   * boolean to show or hide the tooltip
   */
  alwaysShown?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  position = 'TOP',
  alwaysShown,
  tooltipText,
  children,
}: TooltipProps) => {

  const [showTooltip, setShowTooltip] = useState(false);

  const positioning = {
    TOP: {
      bottom: '80%',
    },
    BOTTOM: {
      bottom: '-80%',
    }
  }
  return (
    <>
      <StyledTooltipContainer 
      onMouseEnter={() =>setShowTooltip(true)}
      onMouseLeave={() =>setShowTooltip(false)}
      >
        {children}
        <StyledTooltip 
        className="twizzle-tooltip" 
        style={{
          bottom: positioning[position].bottom,
          visibility: alwaysShown ? 'visible' : showTooltip ? 'visible' : 'hidden',
          opacity: alwaysShown ? 1 : showTooltip ? 1 : 0,
        }}
        >
          {tooltipText}
          </StyledTooltip>
      </StyledTooltipContainer>
    </>
  );
};

export default Tooltip;
