import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { greyBackgroundColor } from "../../../constants";
import { StyledAccordionTitle } from "./StyledAccordion";

interface AccordionTitleProps {
  /**
   * Content of the accordion title
   */
  content: string | React.ReactNode;
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
  content,
  isOpen,
  onClick,
  disabled,
  icon,
  style,
}) => {
  return (
    <StyledAccordionTitle
      className={`${isOpen ? "open" : ""}`}
      onClick={() => onClick?.()}
      style={{
        backgroundColor: disabled ? greyBackgroundColor : "inherit",
        color: disabled ? "grey" : "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {content}
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
