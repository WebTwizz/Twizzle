import React from "react";
import { useMemo } from "react";
import { StyledAvatar } from "./StyledAvatar";

interface AvatarProps {
  /**
   * The image url to be displayed
   */
  src?: string;
  /**
   * The alt text to be displayed
   * @default "avatar-image"
   */
  alt?: string;
  /**
   * The name of the user
   */
  name?: string;
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
   * The backgorund color of the avatar, otherwise it will default to random preset colors
   */
  backgroundColor?: string;
  /**
   * The text color of the avatar, otherwise it will default to random preset colors
   */
  color?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar-image",
  name,
  size = "medium",
  shape = "circle",
  backgroundColor,
  color,
  ...rest
}) => {
  const colorPalette = [
    ["#D77373", "#FFABAB"],
    ["#72D6CD", "#ABFFF7"],
    ["#D172D6", "#FFABD3"],
    ["#D67278", "#FFABB7"],
    ["#848FD8", "##897592"],
  ];

  const sizeAttributes = {
    small : {fontSize: "0.8rem", width: "1.5rem", height: "1.5rem", borderRadius: "16px"},
    medium: {fontSize: "1rem", width: "2rem", height: "2rem", borderRadius: "24px"},
    large: {fontSize: "1.5rem", width: "3rem", height: "3rem", borderRadius: "32px"},
  };


  //get initials from name
  const getInitials = (name: string = 'Anonymous') => {
    const nameArray = name.split(' ');
    const initials = nameArray.map(word => word[0]).join('');
    return initials.toUpperCase();
  };

  const getColor = useMemo(() => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, []);

  return (
    <StyledAvatar
      role={"avatar"}
      style={{
        backgroundColor: !src? (backgroundColor || getColor[0]): undefined,
        color: color || getColor[1],
        fontSize: sizeAttributes[size].fontSize,
        width: sizeAttributes[size].width,
        height: sizeAttributes[size].height,
        borderRadius: shape == 'square'? '3px': sizeAttributes[size].borderRadius,
      }}
      {...rest}
    >
        {src ? (
          <img 
          src={src} 
          alt={alt} 
          style={{
            width: sizeAttributes[size].width,
            height: sizeAttributes[size].height,
            borderRadius:shape == 'square'? '3px': sizeAttributes[size].borderRadius,  
          }} 
          />
        ) : (
          <span>{getInitials(name)}</span>
        )}
    </StyledAvatar>
  );
};

export default Avatar;
