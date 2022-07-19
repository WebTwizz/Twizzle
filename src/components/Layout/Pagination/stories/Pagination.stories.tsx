import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '..';


export default {
    title: 'Components/Layout/Pagination',
    component: Pagination,
    argTypes: {
        page: {
            control: { type: 'number' },
        },
        totalPages: {
            control: { type: 'number' },
        },
        onChange: {
            control: { type: 'func' },
        },
    },
} as ComponentMeta<typeof Pagination>;

const PaginationTemplate: ComponentStory<typeof Pagination> = ({ page, totalPages, onChange }) => {
    return <Pagination page={page} totalPages={totalPages} onChange={onChange} />;
}

export const PaginationComponent = PaginationTemplate.bind({});
PaginationComponent.args = {
    page: 1,
    totalPages: 10,
    onChange: () => {},
};
