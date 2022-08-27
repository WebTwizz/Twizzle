import { render } from "@testing-library/react";
import React from "react";
import { Breadcrumbs } from "..";

describe("Breadcrumbs component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Breadcrumbs items={[{ title: "Home", href: "#" }]} />
    );
    const breadcrumb = getByText("Home");
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveAttribute("href", "#");
  });

  it("should render correctly with custom seperator", () => {
    const seperator = ">";
    const { getByText } = render(
      <Breadcrumbs
        items={[{ title: "Home", href: "#" }, { title: "About", href: "#" }]}
        seperator={seperator}
      />
    );
    const breadcrumb = getByText("Home");
    expect(breadcrumb).toBeInTheDocument();
    expect(getByText(seperator)).toBeInTheDocument();
    expect(breadcrumb).toHaveAttribute("href", "#");
  });
});
