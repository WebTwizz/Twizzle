import React from 'react';
import { StyledAccordionContent, StyledAccordionItem } from "./StyledAccordion";

interface AccordionItemProps {
  /**
   * Content of the accordion item
   */
  content: React.ReactNode;
  /**
   * If true, the item is open
   * @note This is an uncontrolled component
   */
  isOpen?: boolean;
  /**
   * Style of the accordion item
   */
  style?: React.CSSProperties;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  content,
  isOpen,
  style,
}) => {
  return (
    <StyledAccordionItem className={`${!isOpen ? "closed" : ""}`} style={style}>
      <StyledAccordionContent className="accordion-content">
        {content}
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
