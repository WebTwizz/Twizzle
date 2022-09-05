import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '..';


export default {
    title: 'Components/Navigation/Pagination',
    component: Pagination,
    argTypes: {
        page: {
            control: { type: 'number' },
            defaultValue: 1,
        },
        totalPages: {
            control: { type: 'number' },
            defaultValue: 10,
        }
    },
} as ComponentMeta<typeof Pagination>;

const PaginationTemplate: ComponentStory<typeof Pagination> = ({ page, totalPages, onChange }) => {
    return <Pagination page={page} totalPages={totalPages} onChange={onChange} />;
}

export const PaginationComponent = PaginationTemplate.bind({});
