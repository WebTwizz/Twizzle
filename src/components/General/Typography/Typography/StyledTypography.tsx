import styled from 'styled-components';

type StyledTypographyProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledTypography1 = styled.h1<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '2.5rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
export const StyledTypography2 = styled.h2<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '2rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};

    `;
export const StyledTypography3 = styled.h3<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '1.5rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
export const StyledTypography4 = styled.h4<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '1.25rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
export const StyledTypography5 = styled.h5<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '1rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
export const StyledTypography6 = styled.h6<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '0.75rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
export const StyledTypographyp = styled.p<StyledTypographyProps>`
    font-size: ${props => props.style?.fontSize || '0.75rem'};
    ${({ styleOverrides }) => ({ ...styleOverrides })};
    `;
