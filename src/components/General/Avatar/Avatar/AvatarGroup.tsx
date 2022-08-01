import React from "react";
import { useMemo } from "react";
import { Box } from "../../../Box/Box";
import { greyBackgroundColor, greyColor } from "../../../constants";
import Avatar from "./Avatar";
import { StyledAvatar } from "./StyledAvatar";
import { StyledAvatarGroup } from "./StyledAvatarGroup";

interface AvatarGroupProps {
  /**
   * The size of the avatar out of the following options:
   * small, medium, large
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * The shape of the avatar out of the following options:
   * circle, square
   * @default circle
   */
  shape?: string;
  /**
   * The Avatar components that will be displayed]
   */
  children?: React.ReactNode;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  size = "medium",
  shape = "circle",
  children,
  ...rest
}) => {

  const childrenComponents = React.Children;
  const childrenArray = childrenComponents.toArray(children);

  const excessChildren = childrenArray.length - 3;

  return (
    <StyledAvatarGroup>
      {childrenArray.slice(0, 3).map((child, index) => {
        return <Box key={`avatar-${index}`}>{child}</Box>;
      })}
      {childrenArray.length > 3 && (
        <Avatar
          backgroundColor={greyBackgroundColor}
          color={greyColor}
          name={`+ ${excessChildren.toString()}`}
          size={size}
          shape={shape}
        />
      )}
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;
