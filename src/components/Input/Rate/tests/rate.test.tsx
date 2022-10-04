import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Rate } from "..";

describe("Rate component", () => {
    it("should render correctly", () => {
        render(<Rate />);
        expect(screen.getByRole("rate")).toBeInTheDocument();
    });

    it("should clear rating if same rating is clicked twice", () => {
        const RATING = 3
        const GOLD_COLOR = "#ffc107"
        const GREY_COLOR = "#ccc"

        render(<Rate rating={RATING} color={GOLD_COLOR}/>);

        const threeStarIcon = screen.getByTestId(`rating-icon-${RATING}`)
        const starIcons = [
            screen.getByTestId("rating-icon-1"),
            screen.getByTestId("rating-icon-2"),
            threeStarIcon
        ]

        starIcons.forEach(icon => expect(icon.attributes.color.value).toEqual(GOLD_COLOR))

        fireEvent(threeStarIcon, new MouseEvent("click", {bubbles: true}))

        starIcons.forEach(icon => expect(icon.attributes.color.value).toEqual(GREY_COLOR))
    })

    it('should not clear all ratings when rating is changed from higher to lower', () => {
        const RATING = 5
        const GOLD_COLOR = "#ffc107"
        const GREY_COLOR = "#ccc"

        render(<Rate rating={RATING} color={GOLD_COLOR}/>);

        const threeStarIcon = screen.getByTestId('rating-icon-3')
        const firstThreeStarIcons = [
            screen.getByTestId("rating-icon-1"),
            screen.getByTestId("rating-icon-2"),
            threeStarIcon
        ];

        const lastTwoStarIcons = [
            screen.getByTestId("rating-icon-4"),
            screen.getByTestId("rating-icon-5"),
        ];

        [...firstThreeStarIcons, ...lastTwoStarIcons]
            .forEach(
                icon => expect(icon.attributes.color.value).toEqual(GOLD_COLOR)
            )

        fireEvent(threeStarIcon, new MouseEvent("click", {bubbles: true}))

        firstThreeStarIcons.forEach(icon => expect(icon.attributes.color.value).toEqual(GOLD_COLOR))
        lastTwoStarIcons.forEach(icon => expect(icon.attributes.color.value).toEqual(GREY_COLOR))
    })
});