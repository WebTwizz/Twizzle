//create checkbox story
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Input/Checkbox',
    component: Checkbox,
    argTypes: {
        checked: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text' },
            defaultValue: 'Checkbox',
        },
        name: {
            control: { type: 'text' },
        },
        onChange: {
            control: { control: false },
        },
        style: {
            control: false,
        }
    }
} as ComponentMeta<typeof Checkbox>;

const CheckboxTemplate: ComponentStory<typeof Checkbox> = ({
    checked,
    disabled,
    label,
    ...rest
}) => {
    return (
        <Checkbox
            checked={checked}
            disabled={disabled}
            label={label}

            {...rest}
        />
    )
}

export const CheckboxComponent = CheckboxTemplate.bind({});