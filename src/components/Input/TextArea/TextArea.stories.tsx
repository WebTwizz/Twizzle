import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from "./TextArea";


export default {
    title: 'Components/Input/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

export const Default: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea placeholder="Placeholder"/> </> ) }
export const CharacterCount: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea characterCount placeholder="Placeholder"/> </> ) }
export const Disabled: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea disabled placeholder="Placeholder"/> </> ) }
