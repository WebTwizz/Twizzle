import styled from 'styled-components';


export const StyledTable = styled.table`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    border-spacing: 0;
    border: 0.5px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    border-spacing: 0;
`;

export const StyledTableHead = styled.thead`
    border-bottom: 1px solid #f5f7fa;
    background-color: #f9f9f9;
`;

export const StyledTableBody = styled.tbody`
    border-bottom: 1px solid #ddd;
    background-color: #fff;
`;

export const StyledTableRow = styled.tr`
    &:hover {
        cursor: pointer;
    }
    `;

export const StyledTableHeaderCell = styled.th`
    padding: 15px 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    vertical-align: top;
    color: #6d7a8f;
    font-weight: 500;
`;

export const StyledTableCell = styled.td`
    padding: 15px 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
    color: #4c5564;
`;