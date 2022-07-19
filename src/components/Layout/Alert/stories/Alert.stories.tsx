// create storybook for alert component similar to button component story

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '..';

export default {
    title: 'Components/Layout/Alert',
    component: Alert,  
    argTypes: {
        children: { 
            control: 'text' ,
            defaultValue: 'This is a sample alert'
        },
        variant:{
            options: [ 'info' , 'success', 'warning' , 'danger'],
            control: 'select'
          }
    },
} as ComponentMeta<typeof Alert>;

const AlertTemplate: ComponentStory<typeof Alert> = ({ children, ...rest }) => {
    return <Alert {...rest}>{children}</Alert>;
}

export const AlertComponent = AlertTemplate.bind({});
