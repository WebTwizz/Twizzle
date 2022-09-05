import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '..';
import {Checkbox} from '../../Checkbox';
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
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
            defaultValue: 'medium',
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    }
} as ComponentMeta<typeof Toggle>;

const ToggleTemplate: ComponentStory<typeof Toggle> = ({
    disabled,
    size = "medium",
    ...rest
}) => {
    const [toggled, setToggled] = useState(false);
    return (
        <>
            <Toggle
                onChange={() => setToggled(!toggled)}
                disabled={disabled}
                size={size}
                toggled={toggled}
                {...rest}
            />
            <Toggle/>
        </>
    )
}

export const ToggleComponent = ToggleTemplate.bind({});




