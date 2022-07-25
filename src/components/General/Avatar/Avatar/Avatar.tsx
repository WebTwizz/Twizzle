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
   */
  alt?: string;
  /**
   * The name of the user
   */
  name?: string;
  /**
   * The size of the avatar out of the following options:
   * small, medium, large
   */
  size?: string;
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
  alt,
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
        fontSize: size === "small" ? "0.8rem" : size === "large" ? "1.5rem" : "1rem",
        width: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
        height: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
        borderRadius:
          shape === "circle" ? "50%" : shape === "square" ? "5px" : "0px",
      }}
      {...rest}
    >
        {src ? (
          <img 
          src={src} 
          alt={alt} 
          className={`avatar-${size}`} 
          style={{
            width: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
            height: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
            borderRadius:
            size === "small" ? "16px" : size === "medium" ? "24px" : "32px",    
          }} 
          />
        ) : (
          <span>{getInitials(name)}</span>
        )}
    </StyledAvatar>
  );
};

export default Avatar;
