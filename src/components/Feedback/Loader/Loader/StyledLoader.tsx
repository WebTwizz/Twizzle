import styled from 'styled-components';

type StyledLoaderProps = {
  styleOverrides?: React.CSSProperties;
};

export const StyledLoader  = styled.div<StyledLoaderProps>`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 5px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  background: transparent;
  box-sizing: border-box;
  animation: twizzle-loader-rotation 1s linear infinite;
  @keyframes twizzle-loader-rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
  ${({ styleOverrides }) => ({ ...styleOverrides })};   
`;