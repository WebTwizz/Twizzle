import { render, within, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Typography } from "..";

describe("Typography component", () => {
  it("should render Typography with text", () => {
    const { container } = render(
      <Typography elementType={2}>Hello World</Typography>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  it("should render Typography with custom props", () => {
    const props = {
      style: {
        color: "red",
      },
      copyable: true,
      bold: true,
    italic: true,
    onClick: jest.fn(),
    };

    const { container } = render(
      <Typography elementType={2} {...props}>
        Hello World
      </Typography>
    );
    const typography =
      container.getElementsByClassName("twizzle-typography")[0];

    expect(typography).toHaveStyle(`font-weight: bold; color: red; font-style: italic;`);

    userEvent.click(typography);

    expect(props.onClick).toHaveBeenCalled();
  });
});
