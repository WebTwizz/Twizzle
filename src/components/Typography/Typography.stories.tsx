
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';


export default {
  title: 'Components/General/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => {
    return (
        <>
            <Typography elementType={1}> h1 text</Typography>
            <Typography elementType={2}> h2 text</Typography>
            <Typography elementType={3}> h3 text</Typography>
            <Typography elementType={4}> h4 text</Typography>
            <Typography elementType={5}> h5 text</Typography>
            <Typography elementType={6}> h6 text</Typography>
        </>
    )
        
;

};
