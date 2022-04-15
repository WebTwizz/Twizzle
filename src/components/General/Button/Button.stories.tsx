import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../../Feedback/Loader/Loader';
import { Button } from './Button';

const variants = [
  {type: 'success'},
  {type: 'info'},
  {type: 'warning'},
  {type: 'danger'},
] as const;

export default {
  title: 'Components/General/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button label={'Button'} onClick={(()=>alert('Button clicked!'))}/>;
export const Outlined: ComponentStory<typeof Button> = () => <Button label={'Button'} outlined={true} onClick={(()=>alert('Button clicked!'))}/>;
export const Disabled: ComponentStory<typeof Button> = () => <Button label={'Button'} disabled onClick={(()=>console.log('s'))}/>;
export const Loading: ComponentStory<typeof Button> = () => <Button label={'Button'} loading={<Loader color={'white'}/>}/>;
export const RoundedCorner: ComponentStory<typeof Button> = () => <Button label={'Button'} corner='round'/>;

export const DefaultTypes: ComponentStory<typeof Button> = () => {
  return (
    <>
    {variants.map(({type}) => {
      return (
        <Button label={type} variant={type} onClick={(()=>alert('Button clicked!'))}/>
        
      )
    })}
    <br/>
    {variants.map(({type}) => {
      return (
        <Button label={type} variant={type} outlined onClick={(()=>alert('Button clicked!'))}/>
        
      )
    })}
    </>
  )
}
