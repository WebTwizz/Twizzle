import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./button.css";

interface ButtonProps {
  color?: string;
  label: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: React.ReactNode;
  icon?: React.ReactNode;
  corner?: "default" | "round";
  variant?: "success" | "info" | "warning" | "danger";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  color,
  label,
  outlined,
  style,
  disabled,
  loading,
  icon,
  corner,
  variant,
  ...props
}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  color =
    theme?.variants?.[variant!]?.color ||
    color ||
    theme?.primary?.backgroundColor;
  return (
    <button
      type="button"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`${
        disabled
          ? "twizzle-button-disabled"
          : outlined
          ? "twizzle-button-outlined"
          : "twizzle-button"
      }`}
      {...props}
      style={{
        borderRadius: corner === "round" ? "30px" : "5px",
        backgroundColor: disabled
          ? "#EBEBE4"
          : outlined
          ? hover
            ? color
            : "white"
          : color,
        color: disabled
          ? "white"
          : outlined
          ? hover
            ? "white"
            : color
          : 'white',
        filter: hover ? "brightness(0.8)" : "brightness(1)",
        margin: "5px",
        ...style,
      }}
      disabled={disabled}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {loading}
        {icon}
        {label}
      </div>
    </button>
  );
};

export { Button };
