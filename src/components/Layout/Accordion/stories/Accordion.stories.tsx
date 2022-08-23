//create Accordion component
import React from 'react';
import { Accordion } from '..';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Layout/Accordion',
    component: Accordion,
} as ComponentStory<typeof Accordion>;

const AccordionTemplate: ComponentStory<typeof Accordion> = () => {
    return (
        <Accordion/>
    )
}

export const AccordionComponent = AccordionTemplate.bind({});
