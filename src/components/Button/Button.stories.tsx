
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button label={'ButtonModal'} onClick={(()=>alert('ButtonModal clicked!'))}></Button>;
export const Outlined: ComponentStory<typeof Button> = () => <Button label={'ButtonModal'} outlined={true} onClick={(()=>alert('ButtonModal clicked!'))}></Button>;
export const Disabled: ComponentStory<typeof Button> = () => <Button label={'ButtonModal'} disabled onClick={(()=>console.log('s'))}></Button>;
