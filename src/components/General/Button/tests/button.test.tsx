import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Button } from "..";

describe("Button component", () => {
    it("should render Button with text", () => {
        render(<Button label="Click me" />);
    
        const { getByText } = within(screen.getByRole("button"));
        expect(getByText("Click me")).toBeInTheDocument();
    })

    it("should render Button with icon", () => {
        render(<Button icon="🍎" label={""} />);
    
        const { getByRole } = screen;
        expect(getByRole("button")).toHaveTextContent("🍎");
    })
    it("should render Button with loading", () => {
        render(<Button label={""} isLoading={true}/>);
    
        const { getByRole } = screen;
        expect(getByRole("button")).toHaveTextContent("Loading");
    })
    it("should render Button with disabled", () => {
        render(<Button label={""} disabled />);
    
        expect(screen.getByRole("button")).toBeDisabled;
    })
    it("should render Button with outlined prop", () => {
       render(<Button label={""} outlined />);

         expect(screen.getByRole("button")).toHaveClass("twizzle-button-outlined");
    })
    it("should render Button with corner prop", () => {
        render(<Button label={""} corner="round" />);

        expect(screen.getByRole("button")).toHaveStyle("border-radius: 30px");
    })
})
