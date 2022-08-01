import React from "react";
import { render, screen } from "@testing-library/react";
import { Rate } from "..";

describe("Rate component", () => {
    it("should render correctly", () => {
        render(<Rate />);
        expect(screen.getByRole("rate")).toBeInTheDocument();
    });

});