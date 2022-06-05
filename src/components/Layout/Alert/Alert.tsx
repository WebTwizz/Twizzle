import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
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
  console.log(variant);
  return (
    <div className="twizzle-alert">
      <div className="twizzle-alert-content">
        <div className={`twizzle-alert-${variant}`}>
          <div className="twizzle-alert-content-icon">
            {variant === "info" && infoAlertSVG}
            {variant === "success" && successAlertSVG}
            {variant === "danger" && dangerAlertSVG}
            {variant === "warning" && warningAlertSVG}
            <p className="twizzle-alert-content-text">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Alert };
