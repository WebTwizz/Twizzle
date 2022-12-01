import styled from "styled-components";

type StyledTextAreaContainerProps = {
    styleOverrides?: React.CSSProperties;
};
export const StyledTextAreaContainer = styled.div<StyledTextAreaContainerProps>`
    padding: 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    resize: both;
    margin: 5px 0px;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTextArea = styled.textarea<StyledTextAreaContainerProps>`
    font-family: "Roboto", sans-serif;
    width: 95%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    resize: none;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTextAreaDeleteButton = styled.div`
    margin-top: 10px;
    cursor: pointer;
    color: #e9e9e9;
    font-size: 20px;
    &:hover {
        color: #787575;
    }
`;


