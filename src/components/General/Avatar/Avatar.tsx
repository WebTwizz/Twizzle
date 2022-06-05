import { useMemo } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  name: string;
  size?: string;
  backgroundColor?: string;
  color?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "medium",
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

  const getInitials = (name: string = 'Aonymous') => {
    const nameArray = name.split(" ");
    const initials = nameArray.map((name) => name[0].toUpperCase()).join("");
    return initials;
  };

  const getColor = useMemo(() => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, []);

  return (
    <div
      className="twizzle-avatar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: !src? (backgroundColor || getColor[0]): undefined,
        color: color || getColor[1],
        fontSize: size === "small" ? "0.8rem" : size === "large" ? "1.5rem" : "1rem",
        width: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
        height: size === "small" ? "32px" : size === "medium" ? "48px" : "64px",
        borderRadius:
          size === "small" ? "16px" : size === "medium" ? "24px" : "32px",
      }}
      {...rest}
    >
      <div className="twizzle-avatar-content">
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
          <div className="twizzle-avatar-initials">{getInitials(name)}</div>
        )}
      </div>
    </div>
  );
};

export { Avatar };
