// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  {Button} from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button label={'Button'}></Button>;
export const Outlined: ComponentStory<typeof Button> = () => <Button label={'Button'} outlined={true}></Button>;