import React from "react";
import { render, screen } from "@testing-library/react";
import { FileUploader } from "..";

describe("FileUploader component", () => {
    it("should render correctly", () => {
        render(<FileUploader />);
        expect(screen.getByRole("fileuploader")).toBeInTheDocument();
    });

});