import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './Slider';


export default {
    title: 'Components/Input/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = () => { 
    const [value, setValue] = useState(0);
    const changeSlider= (num: number) => {
        setValue(num);
    }
    return ( <> 
                <h1>Value: {value}</h1>
                <Slider range={[1, 100]} position={value} onChange={(e) => changeSlider(e)}/> 
            </> ) 
            }
