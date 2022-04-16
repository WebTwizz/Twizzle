//create component that scrolls page to top

import { useCallback, useContext, useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { ThemeContext } from "../../../context/ThemeContext";
import "./backToTop.css";
interface BackToTopProps {
  onClick?: () => void;
  color?: string;
  icon?: React.ReactNode;
}

const BackToTop: React.FC<BackToTopProps> = ({
  onClick,
  color,
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

  return (
      <>
    {isVisible? <div
      className="twizzle-back-to-top"
      style={{
        backgroundColor: color || Theme.primary?.backgroundColor,
        color: "white",
      }}
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </div>: null}
    </>
  );
};
export { BackToTop };
