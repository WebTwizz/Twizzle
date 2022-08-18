import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pill from "../Badge/Badge";

export default {
  title: "Components/Layout/Pill",
  component: Pill,
  argTypes: {
    color: { control: "color", defaultValue: "#b02020" },
    children: { control: "text", defaultValue: "BADGE" },
  },
} as ComponentMeta<typeof Pill>;

const PillTemplate: ComponentStory<typeof Pill> = ({ children, ...rest }) => {
  return <Pill {...rest}>2</Pill>;
};

export const PillComponent = PillTemplate.bind({});
