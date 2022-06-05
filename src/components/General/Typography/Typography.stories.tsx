
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
    title: 'Components/General/Typography',
    component: Typography,
    argTypes: {
        elementType: {
        options: [1, 2, 3, 4, 5, 6],
        defaultValue: 1,
        control: { type: 'select' },
      },
      copyable: { control: 'boolean' },
      editable: { control: 'boolean' },
      disabled: { control: 'boolean' },
      bold: { control: 'boolean' },
      italic: { control: 'boolean' },
      type:{
        options: ['success' , 'info' , 'warning' , 'danger'],
        control: 'select',
      }
    },
  } as ComponentMeta<typeof Typography>;

const TypographyTemplate: ComponentStory<typeof Typography> = ({ ...args }) => {
  
    return <Typography {...args}>Typography</Typography>;
  };
  
  export const TypographyComponent = TypographyTemplate.bind({});