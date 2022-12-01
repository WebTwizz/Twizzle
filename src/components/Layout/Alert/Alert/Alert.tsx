import React from "react";
import {
  dangerAlertSVG,
  infoAlertSVG,
  successAlertSVG,
  warningAlertSVG,
} from "./svg";
import { Box } from "../../../Box/Box";
import { StyledAlert } from "./StyledAlert";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the alert
   */
  children?: React.ReactNode;
   /**
   * The type of alert.
   * @default "info"
   */
  variant?: "success" | "info" | "warning" | "danger";
}

const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = "info",
  ...props
 }) => {
  return (
    <StyledAlert role={"alert"} 
    {...props}
    >
        <Box className={`twizzle-alert-${variant}`}
        boxStyles={{
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
              boxStyles={{
               alignItems: "center",
               padding: "1rem",
               width: "100%",
              }}
            >
              {children}
           </Box>
        </Box>
    </StyledAlert>
  );
};

export default Alert;
