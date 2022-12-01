import styled from 'styled-components';

type StyledOverlayProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledOverlay  = styled.div<StyledOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;
    cursor: pointer;  
    ${({ styleOverrides }) => ({ ...styleOverrides })};  
`;