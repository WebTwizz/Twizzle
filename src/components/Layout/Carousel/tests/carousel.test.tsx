import {render } from "@testing-library/react";
import React from "react";
import { Carousel } from "..";

describe("Carousel component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Carousel>
        <div>First slide</div>
        <div>Second slide</div>
        <div>Third slide</div>
      </Carousel>
    );
      
    expect(getByText("First slide")).toBeInTheDocument();
    expect(getByText("Second slide")).toBeInTheDocument();
    expect(getByText("Third slide")).toBeInTheDocument();
  });

  it("should hide arrows and dots when there given the showArrows and ShowDots props", () => {
    const { queryByRole } = render(
      <Carousel showArrows={false} showDots={false}>
        <div>First slide</div>
        <div>Second slide</div>
        <div>Third slide</div>
      </Carousel>
    );

    expect(queryByRole("button")).not.toBeInTheDocument();
  });

});
