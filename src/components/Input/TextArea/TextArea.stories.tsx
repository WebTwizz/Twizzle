import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from "./TextArea";


export default {
    title: 'Components/Input/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;
const variants = [
    {type: 'success'},
    {type: 'info'},
    {type: 'warning'},
    {type: 'danger'},
  ] as const;

export const Default: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea placeholder="Placeholder"/> </> ) }
export const CharacterCount: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea characterCount placeholder="Placeholder"/> </> ) }
export const Disabled: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea disabled placeholder="Placeholder"/> </> ) }
export const AllowClear: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea allowClear characterCount placeholder="Placeholder"/> </> ) }
export const DefaultTypes: ComponentStory<typeof TextArea> = () => {
    return (
      <>
      {variants.map(({type}) => {
        return (
          <TextArea variant={type} />
          
        )
      })}
      
      </>
    )
  }