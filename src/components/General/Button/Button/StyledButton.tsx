import styled from "styled-components";

type StyledButtonProps = {
    styleOverrides?: React.CSSProperties;
};
export const StyledButton = styled.button<StyledButtonProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 5px;
    padding: 15px;
    cursor: pointer;
    display: block;
    @keyframes: 0.3s;
    &:disabled {
        background-color: #EBEBE4;
    }
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButtonIcon = styled.span<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;