import React from 'react';
import { StyledAccordionContent, StyledAccordionItem } from "./StyledAccordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {

  /**
   * Content of the accordion item
   */
  children: React.ReactNode;
  /**
   * onSelect callback
   */
  onSelect?: () => void;
  /**
   * If true, the item is open
   * @note This is an uncontrolled component
   */
  isOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  onClick,
  onSelect,
  isOpen,
  style,
  ...props
}) => {
  return (
    <StyledAccordionItem className={`${!isOpen ? "closed" : ""}`} style={style} onClick={() => onSelect?.()} {...props}>
      <StyledAccordionContent className="accordion-content">
        {children}
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
