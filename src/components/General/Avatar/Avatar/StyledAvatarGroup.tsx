import styled from "styled-components";

type StyledAvatarGroupProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledAvatarGroup = styled.div<StyledAvatarGroupProps>`
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(4, 1fr);
    width: 50px;
    /* style children divs */
    > div {
        margin-right:-10px;
    }
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
