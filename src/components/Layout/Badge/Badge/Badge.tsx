//create a badge component

import { greyColor } from "../../../constants";
import { StyledBadge } from "./StyledBadge";
import chroma from "chroma-js";
import React, { useMemo } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * color of the badge
   * hex only
   * @default #1E90FF
   */
  color: string;
  /**
   * children to be rendered inside the badge
   */
  children: string | React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color, children, style, ...props }) => {
  const badgeColor = useMemo(() => {
    return chroma(color).alpha(0.4).hex();
  }, [color]);

  return (
    <StyledBadge
      styleOverrides={{
        backgroundColor: badgeColor,
        color: color,
        ...style,
      }}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};
export default Badge;
