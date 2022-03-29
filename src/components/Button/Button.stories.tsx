
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';


export default {
  title: 'Components/General/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button label={'Button'} onClick={(()=>alert('Button clicked!'))}/>;
export const Outlined: ComponentStory<typeof Button> = () => <Button label={'Button'} outlined={true} onClick={(()=>alert('Button clicked!'))}/>;
export const Disabled: ComponentStory<typeof Button> = () => <Button label={'Button'} disabled onClick={(()=>console.log('s'))}/>;
export const Loading: ComponentStory<typeof Button> = () => <Button label={'Button'} loading/>;
export const RoundedCorner: ComponentStory<typeof Button> = () => <Button label={'Button'} loading corner='round'/>;
