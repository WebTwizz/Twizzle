import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '..';


export default {
    title: 'Components/Layout/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const TableTemplate: ComponentStory<typeof Table> = () => {
    return (
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell>Header 1</Table.HeaderCell>
                    <Table.HeaderCell>Header 2</Table.HeaderCell>
                    <Table.HeaderCell>Header 3</Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Cell 1</Table.Cell>
                    <Table.Cell>Cell 2</Table.Cell>
                    <Table.Cell>Cell 3</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Cell 1</Table.Cell>
                    <Table.Cell>Cell 2</Table.Cell>
                    <Table.Cell>Cell 3</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export const TableComponent = TableTemplate.bind({});