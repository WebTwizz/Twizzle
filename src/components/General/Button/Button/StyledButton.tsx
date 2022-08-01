import styled from "styled-components";

export const StyledButton = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: ${props => props.style?.border || "1px solid #EBEBE4"};
    border-radius: ${props => props.style?.borderRadius || "5px"};
    padding: 15px;
    cursor: pointer;
    display: flex;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    
    keyframes: 0.3s;
`;