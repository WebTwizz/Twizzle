import styled from "styled-components";

type StyledBadgeProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledBadge = styled.div<StyledBadgeProps>`
  font-size: 0.8rem;
  font-family: system-ui;
  border-radius: 5px;
  padding: 2px 4px;
  margin: 2px;
  width: fit-content;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledPill = styled.div`
  font-size: 0.75rem;
  font-family: system-ui;
  border-radius: 10px;
  padding: 1px 10px;
  margin: 2px;
  width: fit-content;
`;
