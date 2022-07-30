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
  },
} as ComponentMeta<typeof TextInput>;

const AllInputFieldsTemplate: ComponentStory<typeof TextInput> = ({ size, ...props }) => {
  return (
    <>
      <TextInput size={size} {...props}/>
      <PasswordInput size={size} {...props} />
      <SearchInput size={size} {...props} style={{ width: "100%" }} />
    </>
  );
};

export const AllInputFields = AllInputFieldsTemplate.bind({});
