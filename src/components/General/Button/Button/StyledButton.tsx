import styled from "styled-components";

type StyledButtonProps = {
    color?: string;
    backgroundColor?: string;
};
export const StyledButton = styled.button<StyledButtonProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-align: center;
    border: ${props => props.style?.border || "1px solid #EBEBE4"};
    border-radius: ${props => props.style?.borderRadius || "5px"};
    background-color: ${props => props?.backgroundColor || "white"};
    color: ${props => props?.color || "black"};
    margin: 5px;
    padding: 15px;
    cursor: pointer;
    display: block;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    
    keyframes: 0.3s;
    &:disabled {
        background-color: #EBEBE4;
    }
`;