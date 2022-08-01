import styled from "styled-components";

export const StyledSelectInput = styled.input`
    display: flex;
    width:75%;
    align-items: center;
    padding-left: 10px;
    font-family: sans-serif;
    align-items: center;
    overflow:hidden;
`;

export const StyledSelectInputContainer = styled.div`
    height: 30px;
    width: 120px;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    align-items: center;
    position: absolute;
    overflow:hidden;
`;

export const StyledSelectInputValue = styled.span`
    font-family: sans-serif;
`;

export const StyledSelectContainer = styled.ul`
    max-height: 200px;
    overflow: scroll;
    padding: 0px;
    position: absolute;
    visibility: visible;
    margin-top: 60px;
    height: fit-content;
    background-color: #fff;
    list-style-type: none;
    display: block;
    cursor:pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledSelectInputOption = styled.li`
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