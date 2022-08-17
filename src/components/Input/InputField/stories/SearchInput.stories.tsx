import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchInput } from "..";

export default {
    title: 'Components/Input/InputField/SearchInput',
    component: SearchInput,
    argTypes: {
        onChange: {
            control: { control: false },
        },
        style: {
            control: false,
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        }
    }
} as ComponentMeta<typeof SearchInput>;

const SearchInputTemplate: ComponentStory<typeof SearchInput> = ({
    placeholder,
    value,
    onSearch,
    ...rest
}) => {
    return (
        <SearchInput {...rest} inputName={""} onSearch={()=> alert('search')}/>
    )
}


export const SearchInputComponent = SearchInputTemplate.bind({});