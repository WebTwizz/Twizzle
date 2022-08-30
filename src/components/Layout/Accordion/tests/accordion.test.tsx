import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionItem, AccordionTitle } from "..";

describe("Accordion", () => {
  it("renders correctly", () => {
    render(
      <>
        <Accordion>
          <AccordionTitle content="Title 1" />
          <AccordionItem content={"Content 1"} />
        </Accordion>
        <Accordion>
          <AccordionTitle content="Title 2" />
          <AccordionItem content={"Content 2"} />
        </Accordion>
      </>
    );
    const title = screen.getByText("Title 1");
    const content = screen.getByText("Content 1");
    expect(title).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(content.parentElement).toHaveClass("closed");
    userEvent.click(title);
    expect(content.parentElement).not.toHaveClass("closed");
  });
  it("renders correctly with disabled prop", () => {
    render(
      <>
        <Accordion disabled>
          <AccordionTitle content="Title 1" />
          <AccordionItem content={"Content 1"} />
        </Accordion>
      </>
    );
    const title = screen.getByText("Title 1");
    expect(title).toHaveStyle("cursor: not-allowed");
  });
  it("renders correctly with isOpen prop", () => {
    render(
      <>
        <Accordion isOpen>
          <AccordionTitle content="Title 1" />
          <AccordionItem content={"Content 1"} />
        </Accordion>
      </>
    );
    const content = screen.getByText("Content 1");
    expect(content.parentElement).not.toHaveClass("closed");
  });
  it("renders correctly with icon prop", () => {
    render(
      <>
        <Accordion>
          <AccordionTitle content="Title 1" icon={<span>icon</span>} />
          <AccordionItem content={"Content 1"} />
        </Accordion>
      </>
    );
    expect(screen.getByText("icon")).toBeInTheDocument();
  });
});
