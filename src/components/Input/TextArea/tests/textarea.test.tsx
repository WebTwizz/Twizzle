import React from "react";
import { render, screen } from "@testing-library/react";
import { TextArea } from "..";
import userEvent from "@testing-library/user-event";

describe("Input Field component", () => {

    it("should render correctly", () => {
        render(<TextArea inputName={""} />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("should be disabled if given the disabled prop", () => {
        render(<TextArea inputName={""} disabled/>);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("should display character count", () => {
         render(<TextArea inputName={""} characterCount={true} />);
         const input = screen.getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, "Hello");
        expect(screen.getByText("5/100")).toBeInTheDocument();
    });

    it("should display character count with a given max character count", () => {
        render(<TextArea inputName={""} characterCount={true} maxCount={20} />);
        expect(screen.getByText("/20")).toBeInTheDocument();
    });

    it(" should allow text clearing", () => {
        render(<TextArea inputName={""} allowClear={true} />);
        const input = screen.getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, "Hello");
        expect(input).toHaveValue("Hello");
        const deleteButton = screen.getByRole("textdelete");
        expect(deleteButton).toBeInTheDocument();
        userEvent.click(deleteButton);
        expect(input).not.toHaveValue("Hello");
    });


});


