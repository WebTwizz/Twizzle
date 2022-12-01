import styled from 'styled-components';

type StyledPaginationProps = {
    styleOverrides?: React.CSSProperties;
};
export const StyledPagination = styled.div<StyledPaginationProps>`
    display: flex;
    align-items: center;
    width:fit-content;
    font-size: 1rem;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledPaginationButton = styled.div<StyledPaginationProps>`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor:pointer;
    color:#afafaf;
    margin: 0px 5px;
    &:hover {
        color:#919191;
    }
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledPaginationPages = styled.div<StyledPaginationProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    position: relative;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledPaginationPage = styled.span<StyledPaginationProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    color: #afafaf;
    height: 25px;
    width: 25px;
    margin: 0px 3px;
    border-radius: 3px;
    /* margin: 0px 5px; */
    cursor: pointer;
    &:hover {
        background: #f5f5f5;
        border-color: #f5f5f5;
    }
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;




