import styled from "styled-components";

type StyledSelectProps = {
    styleOverrides?: React.CSSProperties;
};
export const StyledSelectInput = styled.input`
    font-family: "Roboto", sans-serif;
    display: flex;
    width:75%;
    align-items: center;
    padding-left: 10px;
    font-family: sans-serif;
    align-items: center;
    overflow:hidden;
`;

export const StyledSelectInputContainer = styled.div<StyledSelectProps>`
    font-family: sans-serif;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    position: relative;
    overflow:hidden;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledSelectInputValue = styled.span<StyledSelectProps>`
    font-family: sans-serif;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledSelectContainer = styled.ul<StyledSelectProps>`
    font-family: sans-serif;
    width: 100%;
    max-height: 200px;
    overflow: scroll;
    padding: 0px;
    position: absolute;
    visibility: visible;
    margin-top: 10px;
    height: fit-content;
    background-color: #fff;
    list-style-type: none;
    display: block;
    cursor:pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledSelectInputOption = styled.li`
    font-family: sans-serif;
    display: none;
    height: 40px;
    display: flex;
    padding-left: 10px;
    font-family: sans-serif;
    align-items: center;
    color: black;
    overflow:hidden;
    &:hover {
        background-color: #eee;
    }
`;