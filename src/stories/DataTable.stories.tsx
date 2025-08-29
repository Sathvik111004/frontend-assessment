import type { Meta, StoryObj } from '@storybook/react'
import { DataTable, Column } from '../components/DataTable'
import React from 'react'

type Row = { id: number; name: string; email: string }

const data: Row[] = [
{ id: 1, name: 'Alice', email: 'alice@example.com' },
{ id: 2, name: 'Bob', email: 'bob@example.com' },
{ id: 3, name: 'Carol', email: 'carol@example.com' },
]

const columns: Column<Row>[] = [
{ key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
{ key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
]

const meta: Meta<typeof DataTable<Row>> = {
title: 'Components/DataTable',
component: DataTable
}
export default meta
type Story = StoryObj<typeof DataTable<Row>>

export const Basic: Story = {
render: () => <DataTable<Row> data={data} columns={columns} />
}

export const Selectable: Story = {
render: () => <DataTable<Row> data={data} columns={columns} selectable onRowSelect={() => {}} />
}

export const LoadingAndEmpty: Story = {
render: () => (
<div className="space-y-6">
<DataTable<Row> data={[]} columns={columns} loading />
<DataTable<Row> data={[]} columns={columns} />
</div>
)
}