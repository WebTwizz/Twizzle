import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { greyBackgroundColor } from "../../../constants";
import { StyledAccordionTitle } from "./StyledAccordion";

interface AccordionTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Content of the accordion title
   */
  children: string | React.ReactNode;
  /**
   * If true, the title is open
   * @note This is an uncontrolled component
   */
  isOpen?: boolean;
  /**
   * onClick callback
   */
  onClick?: () => void;
  /**
   * Disabled state of the title
   */
  disabled?: boolean;
  /**
   * icon of the title
   */
  icon?: React.ReactNode;
  /**
   * Style of the accordion title
   */
  style?: React.CSSProperties;
}

const AccordionTitle: React.FC<AccordionTitleProps> = ({
  children,
  isOpen,
  onClick,
  disabled,
  icon,
  style,
  ...props
}) => {
  return (
    <StyledAccordionTitle
      className={`${isOpen ? "open" : ""}`}
      onClick={() => onClick?.()}
      styleOverrides={{
        backgroundColor: disabled ? greyBackgroundColor : "inherit",
        color: disabled ? "grey" : "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
      {!icon && (
        <span id="arrow">
          <BiChevronDown />
        </span>
      )}
      {icon && <span>{icon}</span>}
    </StyledAccordionTitle>
  );
};

export default AccordionTitle;
