import React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "..";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  it("should render correctly", () => {
    render(<Checkbox inputName={""} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();

  });

  it("should render with label", () => {
    const { getByText } = render(<Checkbox inputName={""} label="Checkbox" />);
    expect(getByText("Checkbox")).toBeInTheDocument();
  });

  it("should be disabled if given the disabled prop", () => {
    render(<Checkbox inputName={""} label="Checkbox" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("should be checked if given the checked prop", () => {
    render(<Checkbox inputName={""} label="Checkbox" checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
    userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should call onCheck if given the onCheck prop", () => {
    const onCheck = jest.fn();
    render(<Checkbox label="Checkbox" onCheck={onCheck} inputName={""} />);
    screen.getByRole("checkbox").click();
    expect(onCheck).toHaveBeenCalled();
  });
});
