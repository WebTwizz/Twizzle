//create checkbox story
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Input/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = () => {
    const [value, setValue] = useState(false);
    const changeCheckbox = (value: boolean) => {
        setValue(value);
    }
    return (
        <>
            <h1>Value: {value.toString()}</h1>
            <Checkbox label='Checkbox' checked={value} onCheck={(e) => changeCheckbox(e)}  />
        </>
    )
}
export const Disabled: ComponentStory<typeof Checkbox> = () => {
    
    return (
        <>
            <Checkbox label='Checkbox' disabled={true} checked={true} />
        </>
    )
}
