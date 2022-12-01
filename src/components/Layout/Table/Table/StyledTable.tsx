import styled from "styled-components";

type StyledTableProps = {
  styleOverrides?: React.CSSProperties;
};
export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  font-family: "Roboto", sans-serif;
  border-spacing: 0;
  border: 0.5px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  border-spacing: 0;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTableHead = styled.thead<StyledTableProps>`
  border-bottom: 1px solid #f5f7fa;
  background-color: #f9f9f9;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTableBody = styled.tbody<StyledTableProps>`
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTableRow = styled.tr<StyledTableProps>`
  &:hover {
    cursor: pointer;
  }
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTableHeaderCell = styled.th<StyledTableProps>`
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  vertical-align: top;
  color: #6d7a8f;
  font-weight: 500;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTableCell = styled.td<StyledTableProps>`
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  color: #4c5564;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
