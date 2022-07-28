import styled from 'styled-components';

export const StyledTypography = styled.div`
    font-family: 'Roboto', sans-serif;
    fontWeight: ${props => props.style?.fontWeight || 'normal'};
    fontStyle: ${props => props.style?.fontStyle || 'normal'};
    color: ${props => props.style?.color || 'black'};
    cursor: ${props => props.style?.cursor || 'inherit'};
    `;

export const StyledTypography1 = styled.h1`
    font-size: ${props => props.style?.fontSize || '2.5rem'};
    `;
export const StyledTypography2 = styled.h2`
    font-size: ${props => props.style?.fontSize || '2rem'};
    `;
export const StyledTypography3 = styled.h3`
    font-size: ${props => props.style?.fontSize || '1.5rem'};
    `;
export const StyledTypography4 = styled.h4`
    font-size: ${props => props.style?.fontSize || '1.25rem'};
    `;
export const StyledTypography5 = styled.h5`
    font-size: ${props => props.style?.fontSize || '1rem'};
    `;
export const StyledTypography6 = styled.h6`
    font-size: ${props => props.style?.fontSize || '0.75rem'};
    `;
export const StyledTypographyp = styled.p`
    font-size: ${props => props.style?.fontSize || '0.75rem'};
    `;
