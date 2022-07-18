import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../index';

const variants = [
  {type: 'success'},
  {type: 'info'},
  {type: 'warning'},
  {type: 'danger'},
] as const;

export default {
  title: 'Components/General/Button',
  component: Button,
  argTypes: {
    color: {
      presetColors: ['red', 'green'],
      control: { type: 'color' },
    },
    label: { control: 'text' },
    outlined: { control: 'boolean' },
    disabled: { control: 'boolean' },
    corner:{
      options: ['default', 'round'],
      control: 'select',
    },
    variant:{
      options: ['success' , 'info' , 'warning' , 'danger'],
      control: 'select',
    },
    icon: { control: false },
    style: { control: false },
    loading: { control: false },

  },
} as ComponentMeta<typeof Button>;


const ButtonTemplate: ComponentStory<typeof Button> = ({ label, ...rest }) => {
  
  return <Button label={label} {...rest} />;
};

export const ButtonComponent = ButtonTemplate.bind({});
ButtonComponent.args= {
  label: 'Button',
};
