import styled from "styled-components";

type StyledBoxProps = {
    boxStyles?: React.CSSProperties;
};
export const Box = styled.div<StyledBoxProps>`
    display: flex;
    ${({ boxStyles }) => ({ ...boxStyles })};
`;