import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'Components/Input/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'];
export const Default: ComponentStory<typeof Select> = () => {
    const [value, setValue] = useState(options[0]);
    const changeSelect = (value: string) => {
        setValue(value);
    }
    return (
        <>
            <h1>Value: {value}</h1>
            <Select options={options} value={value} onSelect={(e) => changeSelect(e)} />
        </>
    )
}
export const Disabled: ComponentStory<typeof Select> = () => {
   
    return ( <> <Select disabled options={['option1', 'option2', 'option3']}/></> )
}
