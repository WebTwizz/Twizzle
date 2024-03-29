import React, { useEffect, useState } from "react";

import { StyledAccordion } from "./StyledAccordion";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children of the accordion
   */
  children?: React.ReactNode;
  /**
   * isOpen state of the accordion
   */
  isOpen?: boolean;
  /**
   * disabled state of the accordion
   */
  disabled?: boolean;
}

interface AccordionChild {
  isOpen?: boolean;
  content?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  isOpen,
  style,
  disabled,
  ...props
}) => {
 
  const [isOpenState, setIsOpenState] = useState(isOpen || false);

  useEffect(() => {
    if(isOpen !== undefined) {
      setIsOpenState(isOpen);
    }
  } , [isOpen]);
  return (
    <StyledAccordion style={style} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<AccordionChild>(child)) {
          return child;
        }

        let elementChild: React.ReactElement<AccordionChild> = child;
        return React.cloneElement(elementChild, {
          isOpen: isOpenState,
          disabled: disabled,
          onClick: () => {
            if(!disabled){
              setIsOpenState(!isOpenState);
            elementChild.props.onClick?.();
            }
          },
          content: elementChild?.props?.content,
        });
      })}
    </StyledAccordion>
  );
};

export default Accordion;
