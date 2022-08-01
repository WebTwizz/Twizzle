// create a storybook for avatar component similar to button component story
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, AvatarGroup } from "../index";

export default {
  title: "Components/General/Avatar/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: "select",
      defaultValue: "circle",
    },
  },
} as ComponentMeta<typeof AvatarGroup>;

const AvatarGroupTemplate: ComponentStory<typeof AvatarGroup> = ({
    size,
    shape,
  ...rest
}) => {
  return (
    <AvatarGroup size={size} shape={shape}>
      <Avatar
        {...rest}
        backgroundColor={"#D77373"}
        color={"#FFABAB"}
        name={"Mark Smith"}
        size={size}
        shape={shape}
      />
      <Avatar
        {...rest}
        backgroundColor={"#72D6CD"}
        color={"#ABFFF7"}
        name={"Jane Doe"}
        size={size}
        shape={shape}
      />
      <Avatar
        {...rest}
        backgroundColor={"#D172D6"}
        color={"#FFABD3"}
        name={"Neil Armstrong"}
        size={size}
        shape={shape}
      />
      <Avatar
        {...rest}
        backgroundColor={"#D67278"}
        color={"#FFABB7"}
        name={"Jane Smith"}
        size={size}
        shape={shape}
      />
      <Avatar
        {...rest}
        backgroundColor={"#848FD8"}
        color={"#897592"}
        name={"Mike Johnson"}
        size={size}
        shape={shape}
      />
    </AvatarGroup>
  );
};
export const AvatarGroupComponent = AvatarGroupTemplate.bind({});
