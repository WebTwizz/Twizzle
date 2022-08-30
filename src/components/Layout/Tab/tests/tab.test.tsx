import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import {Tab, TabList} from "..";
import userEvent from "@testing-library/user-event";

describe("Alert component", () => {
  it("should render correctly", () => {
    render(
      <TabList>
        <Tab> Tab 1 </Tab>
        <Tab> Tab 2 </Tab>
      </TabList>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    
  });

  it("should change active value", () => {
    render(
      <TabList>
      <Tab isActive> Tab 1 </Tab>
      <Tab> Tab 2 </Tab>
    </TabList>
    );
    expect(screen.getByText('Tab 1')).not.toHaveStyle({
      borderColor: '#989898',
    });

    expect(screen.getByText('Tab 2')).toHaveStyle({
      borderColor: '#989898',
    });
  });
});
