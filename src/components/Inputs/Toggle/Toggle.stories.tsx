import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from './Toggle';

export default {
    title: 'Components/Inputs/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = () => { 
    const [toggleValue, setToggleValue] = useState(false);
   
    return ( <> <h1>Toggle: {toggleValue.toString()}</h1><Toggle label={"Toggle"} onToggle={(e)=> setToggleValue(e)}/> </> ) }

export const Toggled: ComponentStory<typeof Toggle> = () => { return ( <> <Toggle toggled label={"Toggle"}/> </> ) }

export const Disabled: ComponentStory<typeof Toggle> = () => { return ( <> <Toggle disabled label={"Toggle"}/> </> ) }


