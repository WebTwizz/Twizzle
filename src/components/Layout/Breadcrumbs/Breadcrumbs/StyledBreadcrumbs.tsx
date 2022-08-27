import styled from "styled-components";

export const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const StyledBreadcrumbsAnchorTag = styled.a`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: brightness(0.6);
  }
`;

export const StyledBreadcrumbsSeperator = styled.span`
  color: #41424c;
  margin: 0 8px;
  font-family: monospace;
`;
