import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextInput } from "..";

export default {
    title: 'Components/Input/InputField/TextInput',
    component: TextInput,
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'Placeholder',
        },
        onChange: {
            control: { control: false },
        },
        style: {
            control: false,
        },
        characterCount: {
            control: false,
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        }
    }
} as ComponentMeta<typeof TextInput>;

const TextInputTemplate: ComponentStory<typeof TextInput> = ({
    placeholder,
    value,
    onChange,
    ...rest
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
}


export const InputComponent = TextInputTemplate.bind({});