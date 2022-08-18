import styled from "styled-components";

export const StyledAlert = styled.div`
    position: relative;
    top: 5;
    width: fit-content;
    border-radius: 10px !important;

    .twizzle-alert-info {
        background-color: #f4f6ff;
        color: #0b5394;
        border: 1px solid #c9d0ff;
        border-radius: 10px !important;
      }
      .twizzle-alert-success {
        background-color: #dff0d8;
        color: #3c763d;
        border: 1px solid #d6e9c6;
        border-radius: 10px !important;
      }
      .twizzle-alert-warning {
        background-color: #feefb3;
        color: #8a6d3b;
        border: 1px solid #fdb813;
        border-radius: 10px !important;
      }
      .twizzle-alert-danger {
        background-color: #f2dede;
        color: #a94442;
        border: 1px solid #ebccd1;
        border-radius: 10px !important;
      }
`;

export const StyledTextAlert = styled.div`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    position: relative;
    color: ${props => props.color};
`;