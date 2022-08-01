import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "..";

describe("Modal component", () => {
    const props = {
        isOpen: true,
        onClose: jest.fn(),
        onCancel: jest.fn(),
        onConfirm: jest.fn(),
        title: "Modal title",
        children: "Modal content"
    };

    it("should render correctly", () => {
        render(<Modal {...props}/>);
        expect(screen.getByRole("modal")).toBeInTheDocument();
        expect(screen.getByText("Modal content")).toBeInTheDocument();
        expect(screen.getByText(props.children)).toBeInTheDocument();
    });

    it("should render with onCancel, onClose, onOk to have been called", () => {
        render(<Modal {...props}/>);
        const onClose = props.onClose;
        const onCancel = props.onCancel;
        const onConfirm = props.onConfirm;
        const closeButton = screen.getByRole("close-button");
        const cancelButton = screen.getByText("Cancel");
        const okButton = screen.getByText("Confirm");
        closeButton.click();
        cancelButton.click();
        okButton.click();
        expect(onConfirm).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it("should render with closable to be false", () => {
        render(<Modal {...props} closable={false}/>);
        const closeButton = screen.queryByRole("close-button");
        expect(closeButton).not.toBeInTheDocument();
    });

    it("should render with footer to be false", () => {
        render(<Modal {...props} footer={false}/>);
        const confirmButton = screen.queryByRole("button", {name: "Confirm"});
        const cancelButton = screen.queryByRole("button", {name: "Cancel"});
        expect(confirmButton).not.toBeInTheDocument();
        expect(cancelButton).not.toBeInTheDocument();
    });

    it("should render with showCancel and showConfirm to be false", () => {
        render(<Modal {...props} footer={false}/>);
        const confirmButton = screen.queryByRole("button", {name: "Confirm"});
        const cancelButton = screen.queryByRole("button", {name: "Cancel"});
        expect(confirmButton).not.toBeInTheDocument();
        expect(cancelButton).not.toBeInTheDocument();
    });

    it("should render with custom confirm button label", () => {
        render(<Modal {...props} confirmText="Custom confirm label"/>);
        const confirmButton = screen.getByRole("button", {name: "Custom confirm label"});
        expect(confirmButton).toBeInTheDocument();
    });
});