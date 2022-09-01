import React from "react";
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeaderCell,
  StyledTableRow,
} from "./StyledTable";

const Table = ({
  children,
  className,
  id,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <StyledTable className={className} id={id} style={style}>
      {children}
    </StyledTable>
  );
};

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  /**
   * Give cell the ability to be clickable
   * @default false
   */
  isSelectable?: boolean;
  /**
   * Configure cell to be selected
   */
  selected?: boolean;
  /**
   * onClick callback method for the table cell
   */
  onClick?: () => void;
}

const Cell: React.FC<TableCellProps> = ({
  children,
  selected,
  isSelectable = false,
  onClick,
  ...props
}) => {
  const [isSelected, setIsSelected] = React.useState(selected || false);
  return (
    <StyledTableCell
      style={{
        backgroundColor: isSelected ? "#f5f7fa" : "#fff",
        cursor: isSelectable ? "pointer" : "default",
      }}
      onClick={() => {
        if (isSelectable) {
          setIsSelected(!isSelected);
        }
        if (onClick) {
          onClick?.();
        }
      }}
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};

const HeaderCell: React.FC<TableCellProps> = ({
  children,
  selected,
  isSelectable = false,
  onClick,
  ...props
}) => {
  const [isSelected, setIsSelected] = React.useState(selected || false);
  return (
    <StyledTableHeaderCell
      style={{
        backgroundColor: isSelected ? "#f5f7fa" : "#f5f7fa",
        cursor: isSelectable ? "pointer" : "default",
      }}
      onClick={() => {
        if (isSelectable) {
          setIsSelected(!isSelected);
        }
        if (onClick) {
          onClick?.();
        }
      }}
      {...props}
    >
      {children}
    </StyledTableHeaderCell>
  );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Configure row to be selected
   * @default false
   */
  isSelectable?: boolean;
  /**
   * Configure row to be hoverable
   * @default false
   */
  isHoverable?: boolean;
  /**
   * Configure row to be selected
   */
  selected?: boolean;
  /**
   * onClick callback method for the table cell
   */
  onClick?: () => void;
}

const Row: React.FC<TableRowProps> = ({
  children,
  onClick,
  selected,
  isHoverable = false,
  isSelectable = false,
  ...props
}) => {
  const [isSelected, setIsSelected] = React.useState(selected || false);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <StyledTableRow
      style={{
        backgroundColor: isSelected ? "#f5f7fa" : "#fff",
        filter: isHovered ? "brightness(0.95)" : "none",
        cursor: isSelectable ? "pointer" : "default",
      }}
      onClick={() => {
        if (isSelectable) {
          setIsSelected(!isSelected);
        }
        if (onClick) {
          onClick?.();
        }
      }}
      onMouseOver={() => {
        if (isHoverable) {
          setIsHovered(true);
        }
      }}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};

interface TableBodyProps extends React.TableHTMLAttributes<TableBodyProps> {
  /**
   * Change the filter of the  cell
   * @default false
   */
  isSelectable?: boolean;
  /**
   * onClick callback method for the table cell
   */
  onClick?: () => void;
}

const Body: React.FC<TableBodyProps> = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

Table.Head = StyledTableHead;
Table.Row = Row;
Table.Body = Body;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;
