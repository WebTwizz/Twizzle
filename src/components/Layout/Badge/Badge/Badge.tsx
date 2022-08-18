//create a badge component

import { greyColor } from "../../../constants";
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

const Badge: React.FC<BadgeProps> = ({
    color,
    children,
}) => {

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
