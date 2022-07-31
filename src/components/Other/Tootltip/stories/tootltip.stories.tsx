//create a storybook component
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "..";
import { Box } from "../../../Box/Box";
import { Typography } from "../../../General/Typography";

export default {
  title: "Components/Other/Tootltip",
  component: Tooltip,
  argTypes: {
    position: {
      control: {
        type: "select",
        options: ["TOP", "BOTTOM"],
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const TooltipTemplate: ComponentStory<typeof Tooltip> = ({
  position,
  children,
  tooltipText = "Hello World!",
  ...rest
}) => {
  return (
    <>
      <Typography elementType={2} bold>
        Tooltip
      </Typography>
      <Tooltip position={position} tooltipText={tooltipText} {...rest}>
        <Typography elementType={"p"}>
          Hover on this text to see tooltip
        </Typography>
      </Tooltip>
    </>
  );
};

export const TooltipComponent = TooltipTemplate.bind({});
