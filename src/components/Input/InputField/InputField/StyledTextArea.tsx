import styled from "styled-components";

export const StyledTextAreaContainer = styled.div`
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
`;

export const StyledTextArea = styled.textarea`
    font-family: "Roboto", sans-serif;
    width: 95%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    resize: none;
`;

export const StyledTextAreaDeleteButton = styled.div`
    margin-top: 10px;
    cursor: pointer;
    color: #e9e9e9;
    font-size: 20px;
    z-index: 1;
    &:hover {
        color: #787575;
    }
`;


