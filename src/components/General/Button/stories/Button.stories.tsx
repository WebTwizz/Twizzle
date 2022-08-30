import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../index';
import { AiOutlineInfoCircle } from "react-icons/ai";

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
    size:{
      options: ['small' , 'medium' , 'large'],
      control: 'select',
    },
    icon: { control: false },
    style: { control: false },

  },
} as ComponentMeta<typeof Button>;


const ButtonTemplate: ComponentStory<typeof Button> = ({ label, ...rest }) => {
  
  return <Button label={label} {...rest} />;
};

export const ButtonComponent = ButtonTemplate.bind({});
ButtonComponent.args= {
  label: 'Button',
};

export const IconButton = ButtonTemplate.bind({});
IconButton.args= {
  icon: <AiOutlineInfoCircle/>,
  outlined: true,
  style: {
    padding: '5px',
  },
  color: '#848484',
};

export const LabelAndIconButton = ButtonTemplate.bind({});
LabelAndIconButton.args= {
  label: 'Button',
  icon: <AiOutlineInfoCircle/>,
  outlined: true,
  color: '#848484',
};


