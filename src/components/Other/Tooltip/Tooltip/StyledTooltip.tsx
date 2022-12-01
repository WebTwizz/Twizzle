import styled from 'styled-components';

type StyledPaginationProps = {
    styleOverrides?: React.CSSProperties;
};
export const StyledTooltipContainer = styled.span`
    position: relative;
    display: inline-block;
}`;

export const StyledTooltip = styled.span<StyledPaginationProps>`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    visibility: visible;
    background-color: #364859;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    width: fit-content;
    margin:auto;
    opacity: 1;
    border-radius: 6px;
    transition: opacity 0.3s;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
}`;
