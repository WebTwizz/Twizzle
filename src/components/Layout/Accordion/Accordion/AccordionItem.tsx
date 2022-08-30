import React from 'react';
import { StyledAccordionContent, StyledAccordionItem } from "./StyledAccordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Content of the accordion item
   */
  content: React.ReactNode;
  /**
   * If true, the item is open
   * @note This is an uncontrolled component
   */
  isOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  content,
  isOpen,
  style,
  ...props
}) => {
  return (
    <StyledAccordionItem className={`${!isOpen ? "closed" : ""}`} style={style} {...props}>
      <StyledAccordionContent className="accordion-content">
        {content}
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
