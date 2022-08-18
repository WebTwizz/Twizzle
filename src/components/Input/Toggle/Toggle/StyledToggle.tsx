import styled from 'styled-components';

export const StyledToggle = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`;

export const StyledToggleInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`;

export const StyledToggleInputLabel = styled.label`
    cursor: pointer;
    width: 60px;
    height: 30px;
    display: block;
    border-radius: 30px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 2.5px;
        left: 5px;
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 25px;
        transition: 0.3s;
        
    }
    &:active:after {
        width: 20px;
    }
    #twizzle-toggle:checked + &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

`;