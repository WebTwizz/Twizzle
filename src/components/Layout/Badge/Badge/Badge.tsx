//create a badge component

import React, { useMemo } from "react";
import { StyledBadge } from "./StyledBadge";
import chroma from "chroma-js";

export interface BadgeProps {
  /**
   * color of the badge
   * hex only
   * @default #1E90FF
   */
  color: string;
  /**
   * children to be rendered inside the badge
   */
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color = "#1E90FF", children }) => {

  const badgeColor = useMemo(() => {
    return chroma(color).alpha(0.4).hex();
  }, [color]);

  return (
    <StyledBadge
      style={{
        backgroundColor: badgeColor,
        color: color,
      }}
    >
      {children}
    </StyledBadge>
  );
};
export default Badge;
