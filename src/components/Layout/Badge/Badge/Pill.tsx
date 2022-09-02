//create a badge component

import React, { useMemo } from "react";
import { StyledPill } from "./StyledBadge";
import chroma from "chroma-js";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * color of the badge
   * hex only
   * @default #1E90FF
   */
  color: string;
  /**
   * children to be rendered inside the badge
   */
  children: number;
}

const Pill: React.FC<PillProps> = ({ color = "#1E90FF", children, style, ...props }) => {
 

  const PillColor = useMemo(() => {
    return chroma(color).alpha(0.4).hex();
  }, [color]);

  return (
    <StyledPill
      
      style={{
        backgroundColor: PillColor,
        color: color,
        ...style,
      }}
      {...props}
    >
      {children}
    </StyledPill>
  );
};
export default Pill;
