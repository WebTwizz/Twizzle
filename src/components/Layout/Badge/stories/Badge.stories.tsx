import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "../Badge/Badge";

export default {
  title: "Components/Layout/Badge",
  component: Badge,
  argTypes: {
    color: { control: "color" },
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
      },
    },
    children: { control: "text", defaultValue: "BADGE" },
  },
} as ComponentMeta<typeof Badge>;

const BadgeTemplate: ComponentStory<typeof Badge> = ({ children, ...rest }) => {
  return <Badge {...rest}>{children}</Badge>;
};

export const BadgeComponent = BadgeTemplate.bind({});
