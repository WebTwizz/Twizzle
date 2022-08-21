//create checkbox story
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup} from '../index';


export default {
    title: 'Components/Input/Radio/RadioGroup',
    component: RadioGroup,
    argTypes: {

        color: {
            control: { type: 'color' },
        },
        labelColor: {
            control: { type: 'color' },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        
    }
} as ComponentMeta<typeof RadioGroup>;

const RadioGroupTemplate: ComponentStory<typeof RadioGroup> = ({
    labelColor,
    size,
    color,
    disabled,
    ...rest
}) => {
    return (
        <>
            <RadioGroup
                {...rest}
                disabled={disabled}
                size={size}
                labelColor={labelColor}
                inputName="radio"
                options={[
                    {
                        label: 'Option 1',
                        value: 'option1',
                    },
                    {
                        label: 'Option 2',
                        value: 'option2',
                    },
                    {
                        label: 'Option 3',
                        value: 'option3',
                    },
                ]}

                color={color}
            />
        </>
    )
}

export const RadioGroupComponent = RadioGroupTemplate.bind({});
