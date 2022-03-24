
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button label={'Button'} onClick={(()=>alert('Button clicked!'))}></Button>;
export const Outlined: ComponentStory<typeof Button> = () => <Button label={'Button'} outlined={true} onClick={(()=>alert('Button clicked!'))}></Button>;
export const Disabled: ComponentStory<typeof Button> = () => <Button label={'Button'} disabled onClick={(()=>console.log('s'))}></Button>;
export const Loading: ComponentStory<typeof Button> = () => <Button label={'Button'} loading></Button>;
