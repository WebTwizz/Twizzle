import styled from "styled-components";

export const StyledAvatarGroup = styled.div`
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(4, 1fr);
    width: 50px;
    /* style children divs */
    > div {
        margin-right:-10px;
    }

`;
