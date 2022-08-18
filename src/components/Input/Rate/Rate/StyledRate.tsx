import styled from 'styled-components';

export const StyledRate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
`;

export const StyledRateIcon = styled.div`
    display: inline-flex;
    color: ${props => props.color || '#ccc'};
    margin-right: auto;
    margin-left:  auto;
`;