import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import "./button.css";
import { StyledButton } from "./StyledButton";

interface ButtonProps {
  /**
   * Color of the button, otherwise it will default to the theme color
   */
  color?: string;
  /**
   * Text inside the button
   */
  label: string;
  /**
   * if true, the button will be outlined
   */
  outlined?: boolean;
  /**
   * onClick handler for the button
   */
  onClick?: () => void;
  /**
   * if true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * loading state of the button
   */
  loading?: React.ReactNode;
  /**
   * icon displayed on the left of the button
   */
  icon?: React.ReactNode;
  /**
   * Corner style of the button
   */
  corner?: "default" | "round";
  /**
   * Variant of the button chosen from the theme
   */
  variant?: "success" | "info" | "warning" | "danger";
  /**
   * Styling added to the button
   */
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
    <StyledButton
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
            ? "#F2F2F2"
            : "white"
          : color,
        color: disabled
          ? "white"
          : outlined?
            color
          : 'white',
        filter: hover ? outlined? "brightness(0.9)" : "brightness(1.2)" : "brightness(1)",
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
    </StyledButton>
  );
};

export default Button;
