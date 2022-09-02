import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Loader} from '../index';

export default {
  title: 'Components/Feedback/Loader',
  component: Loader,
  argTypes: {
    size: { 
      control: 'select', 
      options: ['extraSmall', 'small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    style: {control: false},
  }
} as ComponentMeta<typeof Loader>

const LoaderTemplate: ComponentStory<typeof Loader> = ({ size, color }) => {
  return <Loader size={size} color={color} />
}
export const LoaderComponent = LoaderTemplate.bind({});
LoaderComponent.args = {
  size: 'medium',
}
