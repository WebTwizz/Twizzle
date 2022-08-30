//create a Tab component
import React from "react";
import { StyledTabList } from "./StyledTab";

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * orientation of the tab list
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Content of the tab list
   */
  children: React.ReactNode;
  /**
   * Styling added to the element
   */
  style?: React.CSSProperties;
}

const TabList: React.FC<TabListProps> = ({
  children,
  orientation = "horizontal",
  style,
  ...props
}) => (
  <StyledTabList
    style={{
      flexDirection: orientation === "horizontal" ? "row" : "column",
      ...style,
    }}
    borderRight={orientation === "vertical" ? "1px solid #dcdcdc" : "none"}
    borderBottom={orientation === "horizontal" ? "1px solid #dcdcdc" : "none"}
    textAlign={orientation === "horizontal" ? "center" : "left"}
    {...props}
  >
    {children}
  </StyledTabList>
);

export default TabList;
