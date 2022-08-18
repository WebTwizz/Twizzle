//create a badge component

import React, { useMemo } from "react";
import { greyColor } from "../../../constants";
import { StyledBadge } from "./StyledBadge";

export interface PillProps {
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

const Pill: React.FC<PillProps> = ({ color = "#1E90FF", children }) => {
  const hexToRgba = (hex: string) => {
    const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  };

  const badgeColor = useMemo(() => {
    return hexToRgba(color);
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
export default Pill;
