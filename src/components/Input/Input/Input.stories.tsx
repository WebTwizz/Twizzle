//creat Input story
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from "./Input";
import './input.css'

export default {
    title: 'Components/Input/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const variants = [
    {type: 'success'},
    {type: 'info'},
    {type: 'warning'},
    {type: 'danger'},
  ] as const;

export const Default: ComponentStory<typeof Input> = () => { return ( <> <Input placeholder="Placeholder"/> </> ) }
export const CharacterCount: ComponentStory<typeof Input> = () => { return ( <> <Input characterCount placeholder="Placeholder"/> </> ) }
export const Disabled: ComponentStory<typeof Input> = () => { return ( <> <Input disabled placeholder="Placeholder"/> </> ) }
export const DefaultTypes: ComponentStory<typeof Input> = () => {
  return (
    <>
    {variants.map(({type}) => {
      return (
        <Input variant={type} />
        
      )
    })}
    
    </>
  )
}
export const AllowClear: ComponentStory<typeof Input> = () => { return ( <> <Input characterCount allowClear placeholder="Placeholder"/> </> ) }
