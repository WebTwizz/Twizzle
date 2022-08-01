import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { Loader } from "../../../Feedback/Loader";
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
  isLoading?: boolean;
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
   * Size of the button
   * @default "medium"
   */
  size?: "small" | "medium" | "large" ;
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
  isLoading,
  onClick,
  icon,
  corner,
  variant,
  size = "medium",
  ...props
}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  disabled = isLoading || disabled;

  const loaderSize = {
    small: "extraSmall",
    medium: "small",
    large: "medium",
  }

  color =
    theme?.variants?.[variant!]?.color ||
    color ||
    theme?.primary?.backgroundColor;
  return (
    <StyledButton
      onClick={() => onClick && onClick()}
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
        border: outlined ? "1px solid" : "none",
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
        filter: hover ? outlined? "brightness(0.95)" : "brightness(1.2)" : "brightness(1)",
        fontSize: size === "small" ? "12px" : size === "large" ? "20px" : "15px",
        ...style,
      }}
      disabled={disabled}
    >
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {isLoading && (<Loader 
          size={size == "small" ? "extraSmall" : size == "medium" ? "small" : "medium"}
          color={'#FFF'}
          style={{
            marginRight: "5px",
          }}
        />)}
        {icon}
        {label}
      </Box>
    </StyledButton>
  );
};

export default Button;
