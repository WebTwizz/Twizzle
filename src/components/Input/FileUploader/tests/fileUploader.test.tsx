import React from "react";
import { render, screen } from "@testing-library/react";
import { FileUploader } from "..";

describe("FileUploader component", () => {
    it("should render correctly", () => {
        const upload = jest.fn();
        render(<FileUploader inputName={""} onUpload={(upload())}/>);
        expect(screen.getByRole("fileuploader")).toBeInTheDocument();
    });

    //TODO: add more tests with mock functions
});