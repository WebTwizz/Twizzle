import React from "react";
import { render, screen } from "@testing-library/react";
import { TextInput } from "..";
import userEvent from "@testing-library/user-event";

describe("Input Field component", () => {

    it("should render correctly", () => {
        render(<TextInput inputName={""} />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("should be disabled if given the disabled prop", () => {
        render(<TextInput inputName={""} disabled/>);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("should display character count", () => {
         render(<TextInput inputName={""} characterCount={true} />);
         const input = screen.getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, "Hello");
    });

    it("should limit character count", () => {
        render(<TextInput maxCount={5} inputName={""} />);
        userEvent.type(screen.getByRole("textbox"), "Hello World!");
        expect(screen.getByRole("textbox")).toHaveValue("Hello");
    });

    it(" should allow text clearing", () => {
        render(<TextInput inputName={""} allowClear={true} />);
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


