import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextAlert } from '..';

export default {
    title: 'Components/Layout/TextAlert',
    component: TextAlert,  
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
} as ComponentMeta<typeof TextAlert>;

const AlertTemplate: ComponentStory<typeof TextAlert> = ({ children, ...rest }) => {
    return <TextAlert {...rest}>{children}</TextAlert>;
}

export const AlertComponent = AlertTemplate.bind({});
