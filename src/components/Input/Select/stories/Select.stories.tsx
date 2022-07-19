import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '..';

export default {
    title: 'Components/Input/Select',
    component: Select,
    argTypes: {
        onSelect: {
            control: { control: false },
        }
    }

} as ComponentMeta<typeof Select>;

const SelectTemplate: ComponentStory<typeof Select> = ({
    options,
    ...rest
}) => {

    return (
        <Select
            options={['Option 1', 'Option 2', 'Option 3']}
            {...rest}
        />
    )
}

export const SelectComponent = SelectTemplate.bind({});