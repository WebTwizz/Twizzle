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

    it("should display required symbol if required", () => {
        render(<TextInput inputName={""} required inputLabel="Something"/>);
        expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("can be controlled", () => {
        const onChange = jest.fn();
        render(<TextInput inputName={""} onChange={onChange} />);
        const input = screen.getByRole("textbox");
        userEvent.type(input, "Hello");
        expect(onChange).toHaveBeenCalled();
    });


});

describe("Search Input Field component", () => {
    it("should render correctly", () => {
        const onSearch = jest.fn();
        render(<SearchInput inputName={""} inputLabel={"Search"} onSearch={onSearch()}/>);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(onSearch).toHaveBeenCalled();
    });

    it("can be controlled", () => {
        const onChange = jest.fn();
        render(<SearchInput inputName={""} onChange={onChange} />);
        const input = screen.getByRole("textbox");
        userEvent.type(input, "Hello");
        expect(onChange).toHaveBeenCalled();
    });
});

describe("Password Input Field component", () => {
    it("should render correctly", () => {
        render(<PasswordInput inputName={""} placeholder="placeholder" />);
        expect(screen.getByRole("password")).toBeInTheDocument();
    });

    it("can be controlled", () => {
        const onChange = jest.fn();
        render(<PasswordInput inputName={""} onChange={onChange} />);
        const input = screen.getByRole("password");
        userEvent.type(input, "Hello");
        expect(onChange).toHaveBeenCalled();
    });
});

