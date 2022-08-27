import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Box } from "../../../Box/Box";
import { StyledBreadcrumbs, StyledBreadcrumbsAnchorTag, StyledBreadcrumbsSeperator } from "./StyledBreadcrumbs";

type BreadcrumbItem = {
    title: string,
    href: string,
}

interface BreadcrumbsProps {
    items: {title: string, href: string,}[];
    seperator?: string;
    color?: string;
}

const Breadcrumbs:React.FC<BreadcrumbsProps> = ({ items, seperator = '/', color }) => {


    const theme = useContext(ThemeContext);


    const defaultColor = useMemo(() => {
        return color || theme.primary?.backgroundColor;
    },[color]);

    return (
        <Box>
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