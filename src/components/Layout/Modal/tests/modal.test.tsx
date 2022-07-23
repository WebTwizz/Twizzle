import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "..";

describe("Modal component", () => {
    const props = {
        isOpen: true,
        onClose: jest.fn(),
        onCancel: jest.fn(),
        onOk: jest.fn(),
        title: "Modal title",
        children: "Modal content"
    };

    it("should render correctly", () => {
        render(<Modal {...props}/>);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        //expect props.children string to be in the document
        expect(screen.getByText("Modal content")).toBeInTheDocument();
        expect(screen.getByText(props.children)).toBeInTheDocument();
    });

    it("should render with onCancel, onClose, onOk to have been called", () => {
        render(<Modal {...props}/>);
        const onClose = props.onClose;
        const onCancel = props.onCancel;
        const onOk = props.onOk;
        const closeButton = screen.getByText("×");
        const cancelButton = screen.getByText("Cancel");
        const okButton = screen.getByText("Ok");
        closeButton.click();
        cancelButton.click();
        okButton.click();
        expect(onOk).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});