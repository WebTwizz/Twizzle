import styled from 'styled-components';

export const StyledInputContainer = styled.div`
    margin: 2px 0;
    box-sizing: border-box;
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    align-items:center;
    display:flex;
    gap:5px;


`;

export const StyledTextInput = styled.input`
    border: none;
    background-color: white;
    cursor: text;
    outline: none;
    width: 98%;
    :disabled {
        background-color: #ebebe4;
        cursor: not-allowed;
    }
`;