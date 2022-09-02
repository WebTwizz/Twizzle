import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Typography } from "..";

describe("Typography component", () => {
  it("should render Typography with text", () => {
    render(
      <Typography variant={2}>Hello World</Typography>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  it("should render Typography with custom props", () => {
    const props = {
      style: {
        color: "red",
      },
      bold: true,
      onClick: jest.fn(),
    };

    const { container } = render(
      <Typography variant={2} {...props}>
        Hello World
      </Typography>
    );
    const typography = screen.getByText("Hello World");

    expect(typography).toHaveStyle(`font-weight: 500; color: red;`);

    userEvent.click(typography);

    expect(props.onClick).toHaveBeenCalled();
  });
});
