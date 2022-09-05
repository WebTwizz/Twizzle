import React from "react";
import { render, screen } from "@testing-library/react";
import { FileUploader } from "..";
import userEvent from "@testing-library/user-event";

describe("FileUploader component", () => {
  let file;

  beforeEach(() => {
    file = new File(["testing"], "testing.png", { type: "image/png" });
  });
  it("should render correctly", () => {
    render(<FileUploader inputName={""} />);
    const input = screen.getByLabelText("file-uploader");
    userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file);
  });

  it("should allow more than one file upload at a time by default", () => {
    const newFile = new File(["testing"], "testing.png", { type: "image/png" });
    render(<FileUploader inputName={""} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, [file, newFile]);

    expect(input.files).toHaveLength(2);
    expect(screen.getByText("2 file(s) selected")).toBeInTheDocument();
  });

  it("should override previous upload", () => {
    const newFile = new File(["testing"], "testing.png", { type: "image/png" });
    render(<FileUploader inputName={""} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, file);
    userEvent.upload(input, newFile);

    expect(input.files).toHaveLength(1);
    expect(screen.getByText("1 file(s) selected")).toBeInTheDocument();
  });

  it("should limit file upload if maxFiles is false", () => {
    const newFile = new File(["testing"], "testing.png", { type: "image/png" });
    render(<FileUploader inputName={""} multipleFiles={false} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, [file, newFile]);

    expect(input.files).toHaveLength(1);
    expect(screen.getByText("1 file(s) selected")).toBeInTheDocument();
  });

  it("should accept multiple files if multipleFiles is set to true", () => {
    const newFile = new File(["testing"], "testing.png", { type: "image/png" });
    const newFile2 = new File(["testing"], "testing.png", {
      type: "image/png",
    });

    render(<FileUploader inputName={""} multipleFiles={true} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, [file, newFile, newFile2]);

    expect(input.files).toHaveLength(3);
    expect(screen.getByText("3 file(s) selected")).toBeInTheDocument();
  });

  //File Type Validation is dependent on the browser

  it("should accept files that do not exceed maxFileSize", () => {
    const newFile = new File(["testing"], "testing.png", { type: "image/png" });

    render(<FileUploader inputName={""} maxFileSize={0} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, newFile);

    expect(screen.getByText("File size exceeded")).toBeInTheDocument();
  });

  it("should allow onUpload to be called", () => {
    const onUpload = jest.fn();
    render(<FileUploader inputName={""} onUpload={onUpload} />);
    const input = screen.getByLabelText("file-uploader");

    userEvent.upload(input, file);

    expect(onUpload).toHaveBeenCalled();
  });

  it("should disable the file uploader if the disabled prop is given", () => {
    render(<FileUploader inputName={""} disabled={true} />);
    const input = screen.getByLabelText("file-uploader");

    expect(input).toBeDisabled();
  });

});
