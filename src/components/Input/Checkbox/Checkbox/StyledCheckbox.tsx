import styled from "styled-components";

type StyledCheckboxProps = {
  checkedIcon?: string;
  styleOverrides?: React.CSSProperties;
};

export const StyledCheckboxContainer = styled.span`
  display: inline-block;
`;

export const StyledCheckboxArea = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input<StyledCheckboxProps>`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.15em;
  margin-right: 0.5em;
  outline: none;
  cursor: pointer;

  &:before {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    content: ${(props) => props.checkedIcon};
    color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

type StyledCheckboxTextProps = {
  fontSize?: string;
  color?: string;
  styleOverrides?: React.CSSProperties;
};

export const StyledCheckboxText = styled.span<StyledCheckboxTextProps>`
  font-family: "Roboto", sans-serif;
  margin-left: 0.25rem;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;