//create Accordion component
import React from 'react';
import { Accordion, AccordionItem, AccordionTitle } from '..';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Layout/Accordion',
    component: Accordion,
} as ComponentStory<typeof Accordion>;

const AccordionTemplate: ComponentStory<typeof Accordion> = ({isOpen, disabled}) => {
    return (
        <>
        <Accordion isOpen={isOpen} disabled={disabled}>
            <AccordionTitle content="Title 1" />
            <AccordionItem content={"Content 1"} />
        </Accordion>
        <Accordion isOpen={isOpen} disabled={disabled}>
            <AccordionTitle content="Title 2" />
            <AccordionItem content={"Content 2"} />
        </Accordion>
        <Accordion isOpen={isOpen} disabled={disabled}>
            <AccordionTitle content="Title 3" />
            <AccordionItem content={"Content 3"} />
        </Accordion>
      
        </>
    )
}

export const AccordionComponent = AccordionTemplate.bind({});
