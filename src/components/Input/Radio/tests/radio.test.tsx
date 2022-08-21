import React from "react";
import { render, screen } from "@testing-library/react";
import { RadioGroup } from "..";

describe("Radio Component", () => {
  it("should render correctly", () => {
    render(<RadioGroup inputName={""} options={[{
      label: "label",
      value: "value"
    }]} />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });


  it("should be disabled if given the disabled prop", () => {
    render(<RadioGroup inputName={""} options={[{
      label: "label",
      value: "value"
    }]} 
    disabled
    />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  // TODO: make test pass
  // it("should be checked if given the value prop", () => {
  //   render(
  //   <RadioGroup inputName={""} options={[{
  //     label: "label",
  //     value: "value"
  //   }]} 
  //   value={{
  //     label: "label",
  //     value: "value"
  //   }}
  //   />)
  //   expect(screen.getByRole("radio")).toBeChecked();
  // });
});
