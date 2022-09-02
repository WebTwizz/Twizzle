import styled from "styled-components";

export const StyledAccordion = styled.div`
width: 100%;
font-family: sans-serif;
border-bottom:1px solid #D8D8D8;
`;

export const StyledAccordionTitle = styled.span`
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
padding: 0.5rem 1rem;
&:hover {
    background-color: #F5F5F5;
}
& span#arrow {
    transition: transform 0.3s;
    font-size: 1.2em;
}
&.open span#arrow {
    transform: rotate(180deg);
}

`;

export const StyledAccordionItem = styled.div`
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
    &.closed {
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
    }
`;

export const StyledAccordionContent = styled.div`
    padding: 1rem;
`;

