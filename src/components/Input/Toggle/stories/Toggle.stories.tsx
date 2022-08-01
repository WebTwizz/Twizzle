import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '..';
import { Typography } from '../../../General/Typography';


export default {
    title: 'Components/Input/Toggle',
    component: Toggle,
    argTypes: {
        onChange: {
            control: { control: false },
        },
        style: {
            control: false,
        },
        label: {
            control: { type: 'text' },
            defaultValue: 'Toggle',
        },
    }
} as ComponentMeta<typeof Toggle>;

const ToggleTemplate: ComponentStory<typeof Toggle> = ({
    disabled,
    ...rest
}) => {
    const [toggled, setToggled] = useState(false);
    return (
        <>
            <Toggle
                onToggle={() => setToggled(!toggled)}
                disabled={disabled}
                {...rest}
            />
            <Typography elementType={'p'}> {toggled == false? 'false' : 'true'} </Typography>
        </>
    )
}

export const ToggleComponent = ToggleTemplate.bind({});




