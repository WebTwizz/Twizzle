import React, { useCallback, useRef, useState } from "react";
import { BsCloudUpload, BsTrash } from "react-icons/bs";
import filesize from "filesize";
import {
  StyledFileUploader,
  StyledFileUploaderComponent,
  StyledFileUploaderIcon,
  StyledFileUploaderInput,
  StyledUploadedFile,
  StyledUploadedFileDelete,
  StyledUploadedFileDescription,
  StyledUploadedFileIcon,
  StyledUploadedFileInfo,
} from "./StyledFileUploader";
import { Typography } from "../../../General/Typography";
import { AiOutlineFile, AiOutlineFileImage } from "react-icons/ai";
import { Box } from "../../../Box/Box";
import { greyBackgroundColor } from "../../../constants";
//In progress

interface FileUploaderProps {
  /**
   * Name of the input field
   */
  inputName: string;
  /**
   * Boolean to determine if the file uploader can take multiple files
   */
  multipleFiles?: boolean;
  /**
   * Maximum files allowed to be uploaded
   */
  maxFiles?: number;
  /**
   * Maximum file size allowed to be uploaded
   */
  maxFileSize?: number;
  /**
   * File types allowed to be uploaded
   * @default 1000000000
   */
  fileTypes?: string[];
  /**
   * width of the file uploader
   * @default 100%
   */
  width?: string;
  /**
   * Boolean to determine if the file uploader is disabled
   * @default false
   **/
  disabled?: boolean;
  /**
   * Function to be called when a file is uploaded
   */
  onUpload?: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  inputName,
  multipleFiles,
  maxFiles = 1000,
  maxFileSize = 1000000000,
  fileTypes,
  width = "100%",
  onUpload,
  disabled = false,
}) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [message, setMessage] = useState<string | null>(
    "Browse or drag files here"
  );

  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputFile.current?.click();
  };

  const handleUpload = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles?.length > 1 && !multipleFiles) {
        setMessage("Only one file can be uploaded at a time");
        return;
      }
      if (acceptedFiles && acceptedFiles?.length > maxFiles) {
        setMessage("Maximum number of files exceeded");
        return;
      }
      if (
        acceptedFiles &&
        inputFile.current?.size &&
        inputFile.current?.size > maxFileSize
      ) {
        setMessage("File size exceeded");
        return;
      }
      if (
        acceptedFiles &&
        acceptedFiles.length > 0 &&
        acceptedFiles.length < maxFiles
      ) {
        setFiles(acceptedFiles);
        setMessage(`${acceptedFiles.length} file(s) selected`);
      }
      onUpload?.(acceptedFiles);
      
    },
    [multipleFiles, maxFiles, maxFileSize]
  );

  const handleFileUpload = useCallback(() => {
    const uploadedFiles = inputFile.current?.files;
    if (uploadedFiles) {
      handleUpload(Array.from(uploadedFiles));
    }
  }, [files]);

  const handleFileDelete = (deletedFile: File) => {
    if (files) {
      const newFiles = Array.from(files).filter((file) => file !== deletedFile);
      setFiles(newFiles);
      newFiles.length > 0
        ? setMessage(`${newFiles.length} file(s) selected`)
        : setMessage("Browse or drag files here");
      let dt = new DataTransfer();
      newFiles.forEach((file) => dt.items.add(file));
      if (inputFile.current?.files != undefined) {
        inputFile.current.files = dt.files;
      }
    }
  };

  const handleFileDrop = (e: any) => {
    e.preventDefault();
    handleUpload(Array.from(e.dataTransfer.files));

  };

  return (
    <StyledFileUploaderComponent role={"fileuploader"} style={{ width }}>
      <StyledFileUploader
        onClick={() => handleButtonClick()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleFileDrop(e)}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <StyledFileUploaderIcon
          style={{
            fontSize:
              width === "100%" ? "50px" : width === "50%" ? "25px" : "15px",
          }}
        >
          <BsCloudUpload />
          <Typography
            elementType={"p"}
            style={{
              fontSize:
                width === "100%" ? "20px" : width === "50%" ? "15px" : "12px",
              color: "rgb(134, 134, 134)",
            }}
          >
            {message}
          </Typography>
          <StyledFileUploaderInput
            type="file"
            name={inputName}
            ref={inputFile}
            accept={fileTypes?.join(",")}
            multiple={multipleFiles}
            size={maxFileSize}
            disabled={disabled}
            onChange={() => {
              handleFileUpload();
            }}
            onDrop={(e) => handleFileDrop(e)}
            onClick={() => {
              handleFileUpload();
            }}
          />
        </StyledFileUploaderIcon>
      </StyledFileUploader>
      {files && (
        <Box style={{ flexDirection: "column" }}>
          {files.map((file) => (
            <StyledUploadedFile key={file.name}>
              <StyledUploadedFileIcon>
                {file.type.includes("image") ? (
                  <AiOutlineFile />
                ) : (
                  <AiOutlineFileImage />
                )}
              </StyledUploadedFileIcon>
              <StyledUploadedFileInfo>
                <StyledUploadedFileDescription>
                  <p>{file.name}</p>
                  <p>{filesize(file.size)}</p>
                </StyledUploadedFileDescription>
                <StyledUploadedFileDelete
                  onClick={() => {
                    handleFileDelete(file);
                  }}
                >
                  <BsTrash />
                </StyledUploadedFileDelete>
              </StyledUploadedFileInfo>
            </StyledUploadedFile>
          ))}
        </Box>
      )}
    </StyledFileUploaderComponent>
  );
};

export default FileUploader;
