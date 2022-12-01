import styled from "styled-components";

type StyledRadioProps = {
  styleOverrides?: React.CSSProperties;
};

export const StyledRadioContainer = styled.label<StyledRadioProps>`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.style?.fontSize || "1rem"};
  cursor: pointer;
  display: block;
  position: relative;
  margin: 3px;
  padding: ${(props) => props.style?.padding || "0.1rem 1.75rem"};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    &:checked + span:after {
      display: block;
    }
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
export const StyledRadio = styled.input`
  position: absolute;
  opacity: 0;
`;

type StyledCheckedProps = {
  borderColor?: string;
  top: string;
  left: string;
  width: string;
  height: string;
  checkedWidth: string;
  checkedHeight: string;
};
export const StyledChecked = styled.span<StyledCheckedProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width || "10px"};
  height: ${(props) => props.height || "10px"};
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || "#e9e9e9"};
  border-radius: 50%;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  &:after {
    content: "";
    display: block;
    position: absolute;
    display: none;
    top: ${(props) => props.top || "3px"};
    left: ${(props) => props.left || "3px"};
    width: ${(props) => props.checkedWidth || "10px"};
    height: ${(props) => props.checkedHeight || "10px"};
    border-radius: 50%;
    background: ${(props) => props.color};
  }
  
`;
