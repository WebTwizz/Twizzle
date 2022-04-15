import react from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackDrop } from './Backdrop';
import { Button } from '../../General/Button/Button';
import { Loader } from '../Loader/Loader';

export default {
    title: 'Components/Feedback/BackDrop',
    component: BackDrop
} as ComponentMeta<typeof BackDrop>;

export const Default: ComponentStory<typeof BackDrop> = () => 
 {   const [show, setShow] = react.useState(false);    
    return (

         <>
            <Button label={'Display backdrop'} onClick={()=>setShow(true)} />
            {show && <BackDrop onClick={()=>setShow(false)}> <Loader/></BackDrop>}
        </>)
};

