import React from "react";
import { render, screen } from "@testing-library/react";
import { RadioGroup } from "..";
import userEvent from "@testing-library/user-event";

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

  it("should check RadioGroup option if given the value prop", () => {
    render(<RadioGroup inputName={""} options={[{
      label: "label",
      value: "value"
    }]} 
    value={{
      label: "label",
      value: "value"
    }}
    />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("can be controlled", () => {
    const onChange = jest.fn();
    const options = [
      {
        label: "label",
        value: "value"
      },
      {
        label: "label2",
        value: "value2"
      }
    ];
    render(<RadioGroup inputName={""} options={options} onChange={onChange} />)
    userEvent.click(screen.getByRole("radio", { name: /label2/i }));
    expect(onChange).toBeCalled();
  });
    
});
