import styled from "styled-components";

type StyledAvatarProps = {
    styleOverrides?: React.CSSProperties;
};

export const StyledAvatar = styled.span<StyledAvatarProps>`
display: flex;
align-items: center;
justify-content: center;
font-family: sans-serif;
overflow: hidden;
${({ styleOverrides }) => ({ ...styleOverrides })}; 
`;

export const StyledAvatarImage = styled.img<StyledAvatarProps>`
${({ styleOverrides }) => ({ ...styleOverrides })};
`;

