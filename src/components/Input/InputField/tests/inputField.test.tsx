import React from "react";
import { render, screen } from "@testing-library/react";
import { PasswordInput, SearchInput, TextInput } from "..";
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
         render(<TextInput inputName={""} />);
         const input = screen.getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, "Hello");
        expect(screen.getByText("Hello")).toBeInTheDocument();
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
        const deleteButton = screen.getByRole("textdelete");
        expect(deleteButton).toBeInTheDocument();
        userEvent.click(deleteButton);
        expect(input).not.toHaveValue("Hello");
    });

    it("should display error message", () => {
        render(<TextInput inputName={""} errorMessage={"Error"} invalid/>);
        const input = screen.getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, "Hello");
        expect(screen.getByText("Error")).toBeInTheDocument();
    });


});

describe("Search Input Field component", () => {
    it("should render correctly", () => {
        const onSearch = jest.fn();
        render(<SearchInput inputName={""} inputLabel={"Search"} onSearch={onSearch()}/>);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        userEvent.click(screen.getByRole("button"));
        expect(onSearch).toHaveBeenCalled();
    });
});

describe("Password Input Field component", () => {
    it("should render correctly", () => {
        render(<PasswordInput inputName={""} placeholder="placeholder" />);
        expect(screen.getByRole("password")).toBeInTheDocument();
    });
});

