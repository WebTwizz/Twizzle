import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StyledTab } from "./StyledTab";

interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * onClick callback function
   */
  onClick?: () => void;
  /**
   * isActive boolean to show active tab
   *
   */
  isActive?: boolean;
  /**
   * Content of the tab
   */
  children?: React.ReactNode;
  /**
   * Color of the tab
   * @default "primary"
   */
  color?: string;
  /**
   * Styling added to the element
   */
  style?: React.CSSProperties;
}

const Tab: React.FC<TabProps> = ({
  onClick, 
  isActive,
  color,
  style,
  children,
  ...props
}) => {

    const theme = useContext(ThemeContext);

  return (

    <StyledTab 
    onClick={() => onClick?.()}
    style={{
      color: isActive ? color || theme.primary?.backgroundColor : '#989898',
      borderColor: isActive ? color || theme.primary?.backgroundColor : '#989898',
      borderWidth: isActive ? '2px' : '1px',
      ...style
    }}
    {...props}
    >
      {children}
    </StyledTab>
  );
};

export default Tab;
