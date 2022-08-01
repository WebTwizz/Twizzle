import styled from 'styled-components';

export const StyledLoader  = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  background: transparent;
  @keyframes twizzle-loader-rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }   
`;