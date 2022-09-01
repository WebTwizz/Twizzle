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
            <AccordionTitle> Title 1 </AccordionTitle>
            <AccordionItem onSelect={() => alert('selected')}> Content 1 </AccordionItem>
        </Accordion>
        <Accordion isOpen={isOpen} disabled={disabled}>
            <AccordionTitle> Title 2 </AccordionTitle>
            <AccordionItem> Content 2 </AccordionItem>
        </Accordion>
        <Accordion isOpen={isOpen} disabled={disabled}>
            <AccordionTitle> Title 3 </AccordionTitle>
            <AccordionItem> Content 3 </AccordionItem>
        </Accordion>
      
        </>
    )
}

export const AccordionComponent = AccordionTemplate.bind({});
