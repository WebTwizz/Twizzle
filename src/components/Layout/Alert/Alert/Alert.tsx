import React from "react";
import {
  dangerAlertSVG,
  infoAlertSVG,
  successAlertSVG,
  warningAlertSVG,
} from "./svg";
import { Box } from "../../../Box/Box";
import { StyledAlert } from "./StyledAlert";

export interface AlertProps {
  /**
   * The content of the alert
   */
  children?: React.ReactNode;
   /**
   * The type of alert.
   * @default "info"
   */
  variant?: "success" | "info" | "warning" | "danger";
   /**
   * size of the alert
   */
    size?: "small" | "medium" | "large";
  /**
   * styling for the alert
   */
  style?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = "info",
  size = "medium",
  style }) => {
  return (
    <StyledAlert role={"alert"} 
    style={{
      minWidth: size === "small" ? "30%" : size === "large" ? "50%" : "40%",
      ...style
    }}
    >
        <Box className={`twizzle-alert-${variant}`}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "0.5rem",
          fontFamily: "sans-serif",
          gap: "0.5rem",
        }}>
            {variant === "info" && infoAlertSVG}
            {variant === "success" && successAlertSVG}
            {variant === "danger" && dangerAlertSVG}
            {variant === "warning" && warningAlertSVG}
            <Box
              style={{
               alignItems: "center",
               width: "100%",
              }}
            >
              <p className="twizzle-alert-content-text" style={{paddingLeft: '10px', fontSize: size == 'small'? '0.875em' : size ==  'medium'? '1em' : '1.25em', width:'96%'}}>{children}</p>
           </Box>
        </Box>
    </StyledAlert>
  );
};

export default Alert;
