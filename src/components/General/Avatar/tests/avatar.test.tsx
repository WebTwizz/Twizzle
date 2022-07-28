import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Avatar } from "../";

describe("Avatar component", () => {
  it("should render Avatar with initials", () => {
    render(<Avatar name="John Doe" />);

    const { getByText } = within(screen.getByRole("avatar"));
    expect(getByText("JD")).toBeInTheDocument();
  });

  it("should render Avatar with custom props", () => {
    const props = {
      src: "https://example.com/avatar.png",
      alt: "John Doe",
    };

    render(<Avatar {...props} size={'large'} />);
    const avatar = screen.getByRole("avatar");
    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", props.src);
    expect(image).toHaveAttribute("alt", props.alt);
    expect(avatar).toHaveStyle(`height: 3rem;}`);
  });

  it("should render Avatar with a square shape", () => {
    render(<Avatar name="John Doe" shape="square" />);

    const { getByRole } = screen;
    expect(getByRole("avatar")).toHaveStyle(`border-radius: 24px;`);
  });
});
