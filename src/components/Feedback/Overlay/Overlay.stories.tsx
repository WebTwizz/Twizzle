import react from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overlay } from './Overlay';
import { Button } from '../../General/Button/Button';
import { Loader } from '../Loader/Loader';

export default {
    title: 'Components/Feedback/Overlay',
    component: Overlay
} as ComponentMeta<typeof Overlay>;

export const Default: ComponentStory<typeof Overlay> = () => 
 {   const [show, setShow] = react.useState(false);    
    return (

         <>
            <Button label={'Display overlay'} onClick={()=>setShow(true)} />
            {show && <Overlay onClick={()=>setShow(false)}> <Loader/></Overlay>}
        </>)
};

