import styled from "styled-components";

type StyledCheckboxProps = {
  color?: string;
  checkedIcon?: string;
  height?: string;
  width?: string;
  bottom?: string;
  right?: string;
  checkFontSize?: string;

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
width: ${(props) => props.width || "1.4em"};
height: ${(props) => props.width || "1.4em"};
border-radius: 0.15em;
margin-right: 0.5em;
outline: none;
cursor: pointer;
position: relative;
background-color: ${(props) => props.color};
-webkit-transition: all 0.25s ease-in-out;
transition: all 0.25s ease-in-out;
&:before {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    content: ${(props) => props.checkedIcon};
    font-size: ${(props) => props.checkFontSize || "1.2em"};
    bottom: ${(props) => props.bottom || "0.1em"};
    right: ${(props) => props.right || "0.1em"};
    color: #fff;
    position: absolute;

}
&:disabled {
    cursor: not-allowed;
}
`;

type StyledCheckboxTextProps = {
  fontSize?: string;
};
export const StyledCheckboxText = styled.span<StyledCheckboxTextProps>`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.fontSize || "1rem"};
  margin-left: 0.25rem;
`;
