import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import {
  dangerAlertSVG,
  infoAlertSVG,
  successAlertSVG,
  warningAlertSVG,
} from "./svg";
import "./alert.css";

interface AlertProps {
  children?: React.ReactNode;
  variant?: "success" | "info" | "warning" | "danger";
}

const Alert: React.FC<AlertProps> = ({ children, variant = "info" }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="twizzle-alert">
      <div className="twizzle-alert-content">
        <div className={`twizzle-alert-${variant}`}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "0.5rem",
          gap: "0.5rem",
        }}>
          <div className="twizzle-alert-content-icon">
            {variant === "info" && infoAlertSVG}
            {variant === "success" && successAlertSVG}
            {variant === "danger" && dangerAlertSVG}
            {variant === "warning" && warningAlertSVG}
          </div>
          <p className="twizzle-alert-content-text">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
