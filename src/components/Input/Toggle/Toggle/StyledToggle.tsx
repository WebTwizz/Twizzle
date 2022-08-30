import styled from 'styled-components';

export const StyledToggle = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 3px;
`;

export const StyledToggleInput = styled.input`
    height: 0;
    width: 0;
    display: none;
`;

type StyledToggleInputLabelProps = {
    toggleSize: string;
};

export const StyledToggleInputLabel = styled.label<StyledToggleInputLabelProps>`
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
        width: ${(props) => props.toggleSize};
        height: ${(props) => props.toggleSize};
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