import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Avatar, AvatarGroup } from "../";

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
    expect(getByRole("avatar")).toHaveStyle(`border-radius: 3px;`);
  });
});

describe("AvatarGroup component", () => {
  it("should render AvatarGroup with 3 avatars", () => {
    render(
      <AvatarGroup>
        <Avatar name="John Doe" />
        <Avatar name="Adam Smith" />
        <Avatar name="Bob Neill" />
      </AvatarGroup>
    );

    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('AS')).toBeInTheDocument();
    expect(screen.getByText('BN')).toBeInTheDocument();
  });
});
