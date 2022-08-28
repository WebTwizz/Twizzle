import styled from 'styled-components';

type StyledTabListProps = {
    borderRight: string;
    borderBottom: string;
    textAlign: string;
  }
export const StyledTabList = styled.div<StyledTabListProps>`
    display: flex;
    width: 100%;
    & > button {
        border: none;
        border-right: ${props => props.borderRight};
        border-bottom: ${props => props.borderBottom};
        text-align: ${props => props.textAlign};
    }
`;

export const StyledTab = styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    padding: 10px 20px;
    background: transparent;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
        background-color: #f5f5f5;
    }
`;