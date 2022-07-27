import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StyledLoader } from "./StyledLoader";
interface LoaderProps {
  /**
   * Size of the loader
   */
  size?: "extraSmall"| "small" | "medium" | "large";
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

  const loaderSize = {
    extraSmall : {weight: "0.7rem", padding: "0.15rem", thickness: "0.085rem"},
    small : {weight: "1rem", padding: "0.2rem", thickness: "0.1rem"},
    medium :  {weight: "1.5rem", padding: "0.3rem", thickness: "0.15rem"},
    large :  {weight: "2rem", padding: "0.4rem", thickness: "0.2rem"},
  }


  return (
    <StyledLoader 
    role={"loader"}
    style={{
      width: loaderSize[size].weight,
      height: loaderSize[size].weight,
      padding: loaderSize[size].padding,
      border: `3px solid ${overlayColor}`,
      borderWidth: loaderSize[size].thickness,
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
