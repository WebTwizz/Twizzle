import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { StyledBreadcrumbs, StyledBreadcrumbsAnchorTag, StyledBreadcrumbsSeperator } from "./StyledBreadcrumbs";

type BreadcrumbItem = {
    title: string,
    href: string,
}

interface BreadcrumbsProps  extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The items to be rendered in the breadcrumbs.
     */
    items: BreadcrumbItem[];
    /**
     * The seperator to be used between the items.
     */
    seperator?: string | React.ReactNode;
    /**
     * The color of the breadcrumbs.
     */
    color?: string;
}

const Breadcrumbs:React.FC<BreadcrumbsProps> = ({ items, seperator = '/', color, ...props }) => {


    const theme = useContext(ThemeContext);


    const defaultColor = useMemo(() => {
        return color || theme.primary?.backgroundColor;
    },[color]);

    return (
        <Box {...props}>
            {items.map((item, index) => {
                return (

                    <StyledBreadcrumbs key={index}>
                        <StyledBreadcrumbsAnchorTag
                         href={item.href}
                         style={{
                                color: defaultColor,
                         }}
                        >
                            {item.title}
                            </StyledBreadcrumbsAnchorTag>
                        {index !== items.length-1 && <StyledBreadcrumbsSeperator>{seperator}</StyledBreadcrumbsSeperator>}
                    </StyledBreadcrumbs>
                )
            }
            )}
        </Box>
    )
}

export default Breadcrumbs;