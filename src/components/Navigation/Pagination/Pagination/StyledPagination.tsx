import styled from 'styled-components';

export const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    width:fit-content;
    font-size: 1rem;
`;

export const StyledPaginationButton = styled.div`
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
`;

export const StyledPaginationPages = styled.div`
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
    z-index: 1;
`;

export const StyledPaginationPage = styled.span`
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
`;




