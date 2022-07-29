import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from "..";

export default {
    title: 'Components/Input/SearchInput',
    component: SearchInput,
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
} as ComponentMeta<typeof SearchInput>;


const SearchInputTemplate: ComponentStory<typeof SearchInput> = ({
    ...rest
}) => {
    return (
        <SearchInput     // inputName= "search"
           {...rest}
        />
    )
}

export const SearchInputComponent = SearchInputTemplate.bind({});