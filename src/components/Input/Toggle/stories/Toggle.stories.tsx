import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '..';


export default {
    title: 'Components/Input/Toggle',
    component: Toggle,
    argTypes: {
        onChange: {
            control: { control: false },
        },
        style: {
            control: false,
        },
        label: {
            control: { type: 'text' },
            defaultValue: 'Toggle',
        },
    }
} as ComponentMeta<typeof Toggle>;

const ToggleTemplate: ComponentStory<typeof Toggle> = ({
    disabled,
    ...rest
}) => {
    return (
        <Toggle
            disabled={disabled}
            {...rest}
        />
    )
}

export const ToggleComponent = ToggleTemplate.bind({});




