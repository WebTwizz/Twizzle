import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Breadcrumbs } from "..";

export default {
  title: "Components/Layout/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const BreadcrumbsTemplate: ComponentStory<typeof Breadcrumbs> = ({seperator, color}) => {
  return (
    <>
      <Breadcrumbs
        items={[
          { title: "Home", href: "#" },
          { title: "About", href: "#" },
          { title: "Contact", href: "#" },
        ]}
        seperator={seperator}
        color={color}
      />
    </>
  );
};

export const BreadcrumbsComponent = BreadcrumbsTemplate.bind({});
