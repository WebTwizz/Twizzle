import React from "react";
import { render, screen } from "@testing-library/react";
import Toggle from "../Toggle/Toggle";


describe("Toggle component", () => {
    it("should render correctly", () => {
        render(<Toggle />);
        expect(screen.getByRole("switch")).toBeInTheDocument();
    });
});
