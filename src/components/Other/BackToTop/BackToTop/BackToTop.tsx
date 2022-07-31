//create component that scrolls page to top

import React, { useCallback, useContext, useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StyledBackToTop } from "./StyledBackToTop";
interface BackToTopProps {
  /**
   * onClick callback for the button
   */
  onClick?: () => void;
  /**
   * color of the button
   */
  color?: string;
  /**
   * shape of the button:
   * circle or square
   * @default circle
   */
  shape?: "circle" | "square";
  /**
   * size of the button
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * change icon 
   * @default BsChevronUp
   */
  icon?: React.ReactNode;
}

const BackToTop: React.FC<BackToTopProps> = ({
  onClick,
  color,
  shape = "circle",
  size = "medium",
  icon = <BsChevronUp />,
}) => {
  const Theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback( () => {
    setIsVisible(false);
     window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (onClick) onClick();
  }, []);

  const listenToScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const sizeAttributes = {
    small: {
      fontSize: "1.5rem",
      padding: "0.5rem",
    },
    medium: {
      fontSize: "1.7rem",
      padding: "0.7rem",
    },
    large: {
      fontSize: "2rem",
      padding: "1rem",
    },
  };

  return (
      <>
    {isVisible? 
    <StyledBackToTop
      style={{
        backgroundColor: color || Theme.primary?.backgroundColor,
        borderRadius: shape === "circle" ? "50%" : "5px",
        fontSize: sizeAttributes[size].fontSize,
        padding: sizeAttributes[size].padding,
        color: "white",
      }}
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </StyledBackToTop>
    : null}
    </>
  );
};
export default BackToTop;
