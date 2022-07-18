//create a storybook component
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../General/Button';
import { TooltipPosition, Tooltip } from "./Tooltip";

export default {
    title: 'Components/Other/Tootltip',
    component: Tooltip,
    argTypes: {
        position: {
            control: { type: 'select', options: Object.values(TooltipPosition) },
        },
    },  
} as ComponentMeta<typeof Tooltip>;

const TooltipTemplate: ComponentStory<typeof Tooltip> = ({ position, children, ...rest }) => {
    
    return (
        <>
            <h1>something</h1>
            <Tooltip position={position} {...rest} > 
            {/* <Button label='&#128712;' color='#364859'/>  */}
            This is a really long text that will be truncated and wrapped in a tooltip.
            </Tooltip>
        </>
    );
}

export const TooltipComponent = TooltipTemplate.bind({});