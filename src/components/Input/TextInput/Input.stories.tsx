//creat Input story
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from "./Input";
import './input.css'

export default {
    title: 'Components/Input/TextInput',
    component: Input,
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
        }
    }
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = ({
    placeholder,
    value,
    onChange,
    style,
    ...rest
}) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
            {...rest}
        />
    )
}

export const InputComponent = InputTemplate.bind({});