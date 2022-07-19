//create rate story 
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ImHome3} from 'react-icons/im';
import Rate from '../Rate/Rate';


export default {
    title: 'Components/Input/Rate',
    component: Rate,
    argTypes: {
        icon: {
            control: { type: false },
        },
        onChange: {
            control: { control: false },
        },
        iconSize: {
            defaultValue: '2rem',
        },
        style: {
            control: false,
        }
    }
} as ComponentMeta<typeof Rate>;

const RateTemplate: ComponentStory<typeof Rate> = ({
    disabled,
    ...rest
}) => {
    return (
        <Rate
            disabled={disabled}
            {...rest}
        />
    )
}

export const RateComponent = RateTemplate.bind({});
