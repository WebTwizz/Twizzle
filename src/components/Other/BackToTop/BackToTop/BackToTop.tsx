//create component that scrolls page to top

import React, { useCallback, useContext, useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StyledBackToTop } from "./StyledBackToTop";
interface BackToTopProps extends React.HTMLAttributes<HTMLButtonElement> {
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
  style,
  ...props
}) => {
  const Theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
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
      padding: "0.5rem",
      width: "2rem",
      height: "2rem",
    },
    medium: {
      padding: "0.7rem",
      width: "2.5rem",
      height: "2.5rem",
    },
    large: {
      padding: "1rem",
      width: "3rem",
      height: "3rem",
    },
  };

  return (
    <>
      {isVisible ? (
        <StyledBackToTop
          styleOverrides={{
            backgroundColor: color || Theme.primary?.backgroundColor,
            borderRadius: shape === "circle" ? "50%" : "5px",
            height: sizeAttributes[size].height,
            width: sizeAttributes[size].width,
            padding: sizeAttributes[size].padding,
            color: "white",
            ...style,
          }}
          onClick={() => {
            handleClick();
          }}
          {...props}
        >
          {icon}
        </StyledBackToTop>
      ) : null}
    </>
  );
};
export default BackToTop;
