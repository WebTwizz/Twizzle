import { useCallback, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filesize from "filesize";
import "./fileuploader.css";
import {
  faFile,
  faImage,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

interface FileUploaderProps {
  multipleFiles?: boolean;
  maxFiles?: number;
  disabled?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  multipleFiles,
  disabled,
  maxFiles = 1000,
}) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [message, setMessage] = useState<string | null>('Browse or drag files here');

  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputFile.current?.click();
  };

  const handleFileUpload = useCallback(() => {
        const uploadedFiles = inputFile.current?.files;
        if(uploadedFiles && uploadedFiles?.length > 1 && !multipleFiles) {
            setMessage('Only one file can be uploaded at a time');
        }
        if( uploadedFiles && uploadedFiles?.length > maxFiles) { 
            setMessage('Maximum number of files exceeded');
        }
        if (uploadedFiles && uploadedFiles.length > 0 && uploadedFiles.length < maxFiles) {
            setFiles(Array.from(uploadedFiles));
            setMessage(`${uploadedFiles.length} file(s) selected`);
        }
    },[setFiles]);

    const handleFileDelete = (deletedFile: File) => {
     if(files){
        const newFiles = Array.from(files).filter(file => file !== deletedFile);
        console.log('new', newFiles)
        setFiles(newFiles);
        newFiles.length > 0 ? setMessage(`${newFiles.length} file(s) selected`) : setMessage('Browse or drag files here');
     }
    }

    const handleFileDrop = (e: any) => {
        e.preventDefault();
    }

    
  return (
    <div className="twizzle-file-upload">
      <div
        className="twizzle-file-uploader"
        onClick={() => handleButtonClick()}
        onDragOver = {() => console.log('drag over')}
        onDrop = {(e) => handleFileDrop(e)}
        style= {{
            cursor: disabled? 'not-allowed' : 'pointer',
        }}
      >
        <div className="twizzle-file-uploader-icon">
          <FontAwesomeIcon icon={faUpload} />
          <p id="twizzle-uploader-description">{message}</p>
          <input
            type="file"
            id="file"
            ref={inputFile}
            disabled={disabled}
            onClick={() => {
              handleFileUpload();
            }}
            multiple={true}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="twizzle-uploaded-files"></div>
      {files && (
        <div className="twizzle-uploaded-files">
          {files.map((file) => (
            <div className="twizzle-uploaded-file" key={file.name}>
              <div className="twizzle-uploaded-file-icon">
                {file.type.includes("image") ? (
                  <FontAwesomeIcon icon={faImage} />
                ) : (
                  <FontAwesomeIcon icon={faFile} />
                )}
              </div>
              <div className="twizzle-uploaded-file-info">
                <div className="twizzle-uploaded-file-description">
                  <p>{file.name}</p>
                  <p>{filesize(file.size)}</p>
                </div>
                <div className="twizzle-uploaded-file-delete" 
                onClick={() =>{handleFileDelete(file)}}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { FileUploader };
