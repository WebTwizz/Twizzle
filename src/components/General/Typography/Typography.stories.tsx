
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

const elements = [
    {elementType: 1, elementText: 'h1 text'},
    {elementType: 2, elementText: 'h2 text'},
    {elementType: 3, elementText: 'h3 text'},
    {elementType: 4, elementText: 'h4 text'},
    {elementType: 5, elementText: 'h5 text'},
    {elementType: 6, elementText: 'h6 text'},
] as const;

const variants = [
    {type: 'success'},
    {type: 'info'},
    {type: 'warning'},
    {type: 'danger'},
] as const;

export default {
  title: 'Components/General/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {elements.map(({elementType, elementText}) => {
            return (
                <Typography elementType={elementType}>{elementText}</Typography>
            )
        })}
        </>
    )
};

export const Italic: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {elements.map(({elementType, elementText}) => {
            return (
                <Typography elementType={elementType} italic>{elementText}</Typography>
            )
        })}
        </>
    )
};
export const Bold: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {elements.map(({elementType, elementText}) => {
            return (
                <Typography elementType={elementType} bold>{elementText}</Typography>
            )
        })}
        </>
    )
};
export const Disabled: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {elements.map(({elementType, elementText}) => {
            return (
                <Typography elementType={elementType} disabled>{elementText}</Typography>
            )
        })}
        </>
    )
};

export const Editable: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {elements.map(({elementType, elementText}) => {
            return (
                <Typography elementType={elementType} editable>{elementText}</Typography>
            )
        })}
        </>
    )
};
export const DefaultVariants: ComponentStory<typeof Typography> = () => {
    return (
        <>
        {variants.map(({type}) => {
            return (
                <Typography elementType={3} type={type}>{type}</Typography>
            )
        })}
        </>
    )
};
