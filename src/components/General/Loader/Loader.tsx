import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./loader.css";

interface LoaderProps {
  color?: string;
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  color,
  style,
  ...props
}: LoaderProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="twizzle-loader"
      style={{
        width: "25px",
        height: "25px",
        margin: "5px",
        borderWidth: "3px",
        border: `3px solid ${color || theme.loader?.color || "#1E90FF"}`,
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
