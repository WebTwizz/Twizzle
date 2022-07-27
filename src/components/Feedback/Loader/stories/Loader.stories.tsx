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
    color: {control: false},
    style: {control: false},
  }
} as ComponentMeta<typeof Loader>

const LoaderTemplate: ComponentStory<typeof Loader> = ({ size }) => {
  return <Loader size={size} />
}
export const LoaderComponent = LoaderTemplate.bind({});
LoaderComponent.args = {
  size: 'medium',
}
