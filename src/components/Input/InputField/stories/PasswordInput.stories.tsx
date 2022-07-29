import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordInput } from "..";

export default {
    title: 'Components/Input/InputField/PasswordInput',
    component: PasswordInput,
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'Password',
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
} as ComponentMeta<typeof PasswordInput>;

const PasswordInputTemplate: ComponentStory<typeof PasswordInput> = ({
    placeholder,
    value,
    onChange,
    ...rest
}) => {
    return (
        <PasswordInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
}


export const PasswordInputComponent = PasswordInputTemplate.bind({});