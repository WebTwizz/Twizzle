import React from "react";
import { render, screen } from "@testing-library/react";
import { Toggle } from "..";

describe("Toggle component", () => {
    it("should render correctly", () => {
        render(<Toggle />);
        expect(screen.getByRole("toggle")).toBeInTheDocument();
    });


    it("should be disabled if given the disabled prop", () => {
        render(<Toggle disabled/>);
        expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("should be toggled if given the toggled prop", () => {
        render(<Toggle toggled/>);
        expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it(" should do an action if given the onToggle prop", () => {
        const mockCallback = jest.fn();
        render(<Toggle onToggle={mockCallback}/>);
        screen.getByRole("checkbox").click();
        expect(mockCallback).toHaveBeenCalled();
    });
});