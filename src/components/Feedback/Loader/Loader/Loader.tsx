import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StyledLoader } from "./StyledLoader";
interface LoaderProps {
  /**
   * Size of the loader
   */
  size?: "small" | "medium" | "large";
  /**
   * Color of the loader
   */
  color?: string;
  /**
   * Styling added to the spinner
   */
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color,
  style,
}: LoaderProps) => {
  const theme = useContext(ThemeContext);

  const overlayColor = useMemo(
    () => color || theme.loader?.color || "#1E90FF",
    [color]
  );

  

  return (
    <StyledLoader 
    role={"loader"}
    style={{
      width: size === "small" ? "20px" : size === "large" ? "50px" : "40px",
      height: size === "small" ? "20px" : size === "large" ? "50px" : "40px",
      margin: "5px",
      border: `3px solid ${overlayColor}`,
      borderWidth:
        size === "small" ? "3px" : size === "large" ? "5px" : "4px",
      borderBottom: `3px solid transparent`,
      borderRadius: "50%",
      display: "inline-block",
      boxSizing: "border-box",
      animation: "twizzle-loader-rotation 1s linear infinite",
      ...style,
    }}>
    </StyledLoader>
  );
};

export default Loader;
