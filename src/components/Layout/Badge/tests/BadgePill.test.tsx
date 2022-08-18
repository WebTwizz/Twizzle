import { render, screen } from "@testing-library/react";
import React from "react";
import Badge from "../Badge/Badge";


describe("Badge Component", () => {
    it("should render", () => {
        render(<Badge color="#FF0000"> Badge </Badge>);
        expect(screen.getByText("Badge")).toBeInTheDocument();
    });
})