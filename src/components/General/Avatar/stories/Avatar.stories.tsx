// create a storybook for avatar component similar to button component story
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../index';

export default {
    title: 'Components/General/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: { type: 'text' },
        },
        alt: {
            control: { type: 'text' },
        },
        name: {
            control: { type: 'text' },
        },
        size: {
            options: ['small' , 'medium' , 'large'],
            control: 'select',
            defaultValue: 'medium',
        },
        shape: {
            options: ['circle' , 'square'],
            control: 'select',
            defaultValue: 'circle',
        },
    },
} as ComponentMeta<typeof Avatar>;


const AvatarTemplate: ComponentStory<typeof Avatar> = ({ ...rest }) => {
    return <Avatar {...rest} style={{height: '400px', width:'400px'}} src="https://bit.ly/2k1H1t6"/>;
}
export const AvatarComponent = AvatarTemplate.bind({});
