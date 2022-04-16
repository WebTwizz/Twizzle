//create rate story 
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rate } from './Rate';
import {ImHome3} from 'react-icons/im';


export default {
    title: 'Components/Input/Rate',
    component: Rate,
} as ComponentMeta<typeof Rate>;

export const Default: ComponentStory<typeof Rate> = () => {
    const [value, setValue] = useState(0);
    const changeRate = (value: number) => {
        setValue(value);
    }
    return (
        <>
            <h1>Value: {value}</h1>
            <Rate onRate={(e) => changeRate(e)}
            />
        </>
    )
}
export const Disabled: ComponentStory<typeof Rate> = () => {
   
    return (
        <>
            <Rate  disabled={true} rating={3}/>
            
        </>
    )
}
export const CustomIcon: ComponentStory<typeof Rate> = () => {
   
    return (
        <>
            <Rate  icon={<ImHome3/>} disabled={true} rating={3} color={'blue'}/>
            
        </>
    )
}
export const AllowClearIsFalse: ComponentStory<typeof Rate> = () => {
   
    return (
        <>
            <Rate  allowClear={false} rating={3} color={'blue'}/>
            
        </>
    )
}