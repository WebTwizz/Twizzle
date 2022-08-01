import { render, screen } from "@testing-library/react";
import React from "react";
import Select from "../Select/Select";

describe("Select Component", () => {
  it("should render correctly", () => {
    const options = ["option 1", "option 2", "option 3"];
    render(<Select options={options} inputName="" />);
    expect(screen.getByRole("hidden-select")).toHaveValue(options[0]);
  });
});
