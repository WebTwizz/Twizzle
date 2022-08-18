import styled from "styled-components";

export const StyledModal = styled.div`
    margin: 10px;
    display:flex;
    width:100vh;
    border-radius: 3px;
    overflow:hidden;
    cursor: default;
`;

export const StyledModalContent = styled.div`
    background-color: #F5F6F7;
    width:100%;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom:1px solid rgba(0,0,0,.06);
    font-family: sans-serif;
`;

export const StyledModalClose = styled.span`
    font-family: serif;
    font-size: 1.5em;
    color: #727374;
    cursor: pointer;
    &:hover {
        color: #303030;
    }
`;

export const StyledModalBody = styled.div`
    min-height:50px;
    padding: 20px 15px;
    border-bottom:1px solid rgba(0,0,0,.06);
`;

export const StyledModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px;
`;