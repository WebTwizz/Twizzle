import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert } from "..";

describe("Alert component", () => {
    it("should render correctly", () => {
        render(<Alert />);
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByRole("alert")).toContainHTML(
            '<div class="twizzle-alert-info"'
        );
    });

    it("should render with a different variant", () => {
        render(<Alert variant="danger" />);
        expect(screen.getByRole("alert")).toContainHTML(
            '<div class="twizzle-alert-danger"'
        );
    });
});