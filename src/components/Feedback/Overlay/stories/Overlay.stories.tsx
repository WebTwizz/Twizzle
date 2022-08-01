import react from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overlay } from '../index';
import { Button } from '../../../General/Button';
import { Loader } from '../../Loader';

export default {
    title: 'Components/Feedback/Overlay',
    component: Overlay
} as ComponentMeta<typeof Overlay>;

export const Default: ComponentStory<typeof Overlay> = () => 
 {   const [show, setShow] = react.useState(false);    
    return (

         <>
            <Button label={'Display overlay'} onClick={()=>setShow(true)} />
            {show && <Overlay onClick={()=>setShow(false)}> 
                <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
   
                }}> 
                <Loader/> 
                </div>
            </Overlay>}
        </>)
};

