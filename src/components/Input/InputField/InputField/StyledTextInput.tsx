import styled from 'styled-components';

type StyledFileUploaderProps = {
    styleOverrides?: React.CSSProperties;
};

type StyledTextInputProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledInputContainer = styled.div<StyledFileUploaderProps>`
    margin: 2px 0;
    box-sizing: border-box;
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    align-items:center;
    display:flex;
    gap:5px;
    margin: 5px 0px;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
`;

export const StyledTextInput = styled.input<StyledTextInputProps>`
    border: none;
    background-color: white;
    cursor: text;
    outline: none;
    border-radius: 5px 0px 0px 5px;
    width: 98%;
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    :disabled {
        background-color: #ebebe4;
        cursor: not-allowed;
    }
`;