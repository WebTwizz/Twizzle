import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Carousel } from "..";

export default {
  title: "Components/Layout/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const CarouselTemplate: ComponentStory<typeof Carousel> = ({
  showArrows,
  ...rest
}) => {
  return (
    <Carousel showArrows={showArrows} {...rest}>
      <img src="https://picsum.photos/800/400?random=1" alt="First slide" />
      <img src="https://picsum.photos/800/400?random=2" alt="Second slide" />
      <img src="https://picsum.photos/800/400?random=3" alt="Third slide" />
      <img src="https://picsum.photos/800/400?random=4" alt="Fourth slide" />
      <img src="https://picsum.photos/800/400?random=5" alt="Fifth slide" />
    </Carousel>
  );
};

export const CarouselComponent = CarouselTemplate.bind({});
