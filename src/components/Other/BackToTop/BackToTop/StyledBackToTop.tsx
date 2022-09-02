import styled from 'styled-components';

export const StyledBackToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    font-size: 1rem;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    :hover {
        filter: brightness(0.8);
    }
`;