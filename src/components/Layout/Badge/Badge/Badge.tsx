//create a badge component

import { greyColor } from "../../../constants";
import { StyledBadge } from "./StyledBadge";

export interface BadgeProps {
    color: string;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    color,
    children,
}) => {

    return (
        <StyledBadge 
        style={{
            backgroundColor: `rgba(${color} 0.5)}`,
        }}
        >
            {children}
        </StyledBadge>
    );
}
export default Badge;