import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./loader.css";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color,
  style,
}: LoaderProps) => {
  const theme = useContext(ThemeContext);

  const overlayColor = useMemo(()=> color || theme.loader?.color || "#1E90FF",[color]);

  return (
    <div
      className="twizzle-loader"
      style={{
        width: size === "small" ? "20px" : size === "large" ? "50px" : "40px",
        height: size === "small" ? "20px" : size === "large" ? "50px" : "40px",
        margin: "5px",
        borderWidth: size === "small" ? "2px" : size === "large" ? "5px" : "4px",
        border: `3px solid ${overlayColor}`,
        borderBottom: `3px solid transparent`,
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        animation: "twizzle-loader-rotation 1s linear infinite",
        ...style,
      }}
    />
  );
};

export { Loader };
