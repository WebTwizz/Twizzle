
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';


export default {
  title: 'Components/Layout/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = () => {
 return ( 
 <>
    <div> The first element.</div>
    <Divider orientation="horizontal"> Divider </Divider>
    <div> The second element.</div>
  </>
  )
}
