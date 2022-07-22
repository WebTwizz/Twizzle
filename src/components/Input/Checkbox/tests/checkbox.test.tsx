import React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "..";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with label", () => {
    const { getByText } = render(<Checkbox label="Checkbox" />);
    expect(getByText("Checkbox")).toBeInTheDocument();
  });

  it("should be disabled if given the disabled prop", () => {
    render(<Checkbox label="Checkbox" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("should be checked if given the checked prop", () => {
    render(<Checkbox label="Checkbox" checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should call onCheck if given the onCheck prop", () => {
    const onCheck = jest.fn();
    render(<Checkbox label="Checkbox" onCheck={onCheck} />);
    screen.getByRole("checkbox").click();
    expect(onCheck).toHaveBeenCalled();
  });
});
