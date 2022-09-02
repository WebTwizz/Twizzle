import  styled from 'styled-components';


export const StyledFileUploaderComponent = styled.div`
    position: relative;
    margin: 10px;
    width: ${props => props?.style?.width || '100%'};
`;

export const StyledFileUploader = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    background-color: #fbfbfd;
    color: #ccc;
    border: 1px dashed #ccc;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    td:-moz-drag-over {
        color: red;
    }
    &:hover {
        background-color: #f8f8fb;
        border-color: #aaa;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    }
    &:active {
        border-color: #ccc;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    }
`;

export const StyledFileUploaderIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #ccc;
`;

export const StyledFileUploaderInput = styled.input`
    display: none;
`;

export const StyledUploadedFile = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
    height: 50px;
    width: ${props => props?.style?.width || '100%'};
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fbfbfd;
    color: rgb(134, 134, 134);
`;

export const StyledUploadedFileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    height: 30px;
    width: 30px;
    padding: 5px;
    margin: 5px;
    border-radius: 3px;
`;

export const StyledUploadedFileInfo = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin: 10px;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`;

export const StyledUploadedFileDescription = styled.div`
    font-size: 12px;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`;

export const StyledUploadedFileDelete = styled.div`
    display: flex;
    font-size: 12px;
    color: #EE0000;
    margin-left: auto;
    cursor: pointer;
    &:hover {
        color: #FF0000;
    }
`;





