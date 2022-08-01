import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {TextArea} from "..";

export default {
  title: "Components/Input/TextArea",
  component: TextArea,
  argTypes: {
    onChange: {
      control: { control: false },
    },
    style: {
      control: false,
    },
    placeholder: {
      control: { type: "text" },
      defaultValue: "Placeholder",
    },
    width: {
      control: { type: "text" },
      defaultValue: "100%",
    }
  },
} as ComponentMeta<typeof TextArea>;

const TextAreaTemplate: ComponentStory<typeof TextArea> = ({
  disabled,
  ...rest
}) => {
  return <TextArea disabled={disabled} {...rest} />;
};

export const TextAreaComponent = TextAreaTemplate.bind({});
