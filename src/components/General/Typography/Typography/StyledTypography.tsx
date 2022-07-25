import styled from 'styled-components';

export const StyledTypography = styled.text`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.height || '1rem'};
    `;