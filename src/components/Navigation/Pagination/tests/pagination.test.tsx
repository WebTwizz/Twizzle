import React from "react";
import { screen, render, queryByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "..";


describe("Pagination component", () => {
    it("should render pagination", () => {
        const { getByText } = render(<Pagination page={1} totalPages={10} />);
        expect(getByText("1")).toHaveStyle("border-color: #1E90FF");
        for (let i = 1; i <= 5; i++) {
            expect(getByText(i.toString())).toBeInTheDocument();
        }
    });

    it("should change page button color", () => {
        const { getByText } = render(<Pagination page={1} totalPages={10} />);
        expect(getByText("1")).toHaveStyle("border-color: #1E90FF");
        userEvent.click(getByText("2"));
        expect(getByText("1")).toHaveStyle("border-color: transparent");
        expect(getByText("2")).toHaveStyle("border-color: #1E90FF");

    });

    it("should change displayed pages", () => {
        const { getByText } = render(<Pagination page={1} totalPages={10} />);
        expect(getByText("1")).toHaveStyle("border-color: #1E90FF");
        userEvent.click(getByText("5"));
        userEvent.click(screen.getByRole("next-button"));
        expect(screen.queryByText('1')).not.toBeInTheDocument();
        expect(getByText('6')).toBeInTheDocument();
        userEvent.click(getByText("2"));
        userEvent.click(screen.getByRole("prev-button"));
        expect(screen.queryByText('6')).not.toBeInTheDocument();
    });
});