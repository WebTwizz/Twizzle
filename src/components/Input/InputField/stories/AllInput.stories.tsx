import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput, SearchInput, PasswordInput } from "..";
import { Button } from "../../../General/Button";
import { Box } from "../../../Box/Box";

export default {
  title: "Components/Input/InputField/AllInputFields",
  component: TextInput,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    rightIcon: {
      control: false
    },
    leftIcon: {
      control: false
    }
  },
} as ComponentMeta<typeof TextInput>;

const AllInputFieldsTemplate: ComponentStory<typeof TextInput> = ({ size, ...props }) => {
  return (
    <>
      <TextInput size={size} placeholder="Text" {...props}/>
      <PasswordInput size={size} placeholder="Password" showPasswordIcon {...props} />
      <SearchInput size={size} {...props} />
    </>
  );
};

export const AllInputFields = AllInputFieldsTemplate.bind({});
