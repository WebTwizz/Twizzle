import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: React.ReactNode;
  icon?: React.ReactNode;
  corner?: "default" | "round";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  label,
  outlined,
  style,
  disabled,
  loading,
  icon,
  corner,
  ...props
}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={`${outlined ? "twizzle-button-outlined" : "twizzle-button"}${
        disabled ? "-disabled" : ""
      }`}
      {...props}
      style={{
        borderRadius: corner === "round" ? "30px" : "5px",
        backgroundColor: disabled
          ? "#EBEBE4"
          : outlined
          ? "white"
          : theme.primary?.backgroundColor,
        color: outlined ? theme.primary?.backgroundColor : "white",
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
