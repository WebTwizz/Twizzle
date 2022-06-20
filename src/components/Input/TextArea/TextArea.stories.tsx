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

export const Default: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea inputName="input" placeholder="Placeholder"/></> ) }
export const CharacterCount: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea inputName="input"  characterCount placeholder="Placeholder"/> </> ) }
export const Disabled: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea inputName="input"  disabled placeholder="Placeholder"/> </> ) }
export const AllowClear: ComponentStory<typeof TextArea> = () => { return ( <> <TextArea inputName="input"  allowClear characterCount placeholder="Placeholder"/> </> ) }
export const DefaultTypes: ComponentStory<typeof TextArea> = () => {
    return (
      <>
      {variants.map(({type}) => {
        return (
          <TextArea inputName="input" variant={type} />
          
        )
      })}
      
      </>
    )
  }