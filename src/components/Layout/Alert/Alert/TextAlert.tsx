import React,{ useContext } from "react";
import {
  dangerAlertSVG,
  infoAlertSVG,
  smallInfoAlertSVG,
  largeInfoAlertSVG,
  successAlertSVG,
  warningAlertSVG,
  smallSuccessAlertSVG,
  largeSuccessAlertSVG,
  smallDangerAlertSVG,
  largeDangerAlertSVG,
  smallWarningAlertSVG,
  largeWarningAlertSVG,
} from "./svg";
import { Box } from "../../../Box/Box";
import { AlertProps } from "./Alert";
import { StyledTextAlert } from "./StyledAlert";
import { Typography } from "../../../General/Typography";

interface TextAlertProps extends AlertProps {
  /**
   * Size of the alert
   * @default "medium"
   * @type "small" | "medium" | "large"
   */
  size?: "small" | "medium" | "large";
}

const TextAlert: React.FC<TextAlertProps> = ({ 
  children, 
  variant = "info",
  size = "medium",
  style,
  ...props
 }) => {
    
    const colors = {
        info: "#0B5394",
        success: "#3C763D",
        warning: "#8A6D3B",
        danger: "#A94442",
    }

  return (
    <StyledTextAlert role={"text-alert"}
        style={{
          fontFamily: "sans-serif",
          ...style
        }}
        {...props}
        >
            {variant === "info" && (size === "small"? smallInfoAlertSVG: size === "medium"? infoAlertSVG: largeInfoAlertSVG)}
            {variant === "success" && (size === "small"? smallSuccessAlertSVG: size === "medium"? successAlertSVG: largeSuccessAlertSVG)}
            {variant === "danger" && (size === "small"? smallDangerAlertSVG: size === "medium"? dangerAlertSVG: largeDangerAlertSVG)}
            {variant === "warning" && (size === "small"? smallWarningAlertSVG: size === "medium"? warningAlertSVG: largeWarningAlertSVG)}
            <Box
              style={{
               alignItems: "center",
               width: "100%",
              }}
            >
              <Typography  style={{ paddingLeft: '5px', color: colors[variant] }} elementType={size == "small"? "p" :size == "medium"? 5 : 4}>{children}</Typography>
           </Box>
    </StyledTextAlert>
  );
};

export default TextAlert;
