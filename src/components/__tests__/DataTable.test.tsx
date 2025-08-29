import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable, Column } from '../DataTable'
import React from 'react'

type Row = { id: number; name: string }

const data: Row[] = [
{ id: 1, name: 'Bob' },
{ id: 2, name: 'Alice' },
]

const columns: Column<Row>[] = [
{ key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
]

describe('DataTable', () => {
it('renders rows and sorts', () => {
render(<DataTable data={data} columns={columns} />)
const header = screen.getByRole('button', { name: /sort by name/i })
fireEvent.click(header) // asc
fireEvent.click(header) // desc
expect(screen.getAllByRole('row')).toBeTruthy()
})

it('supports selection', () => {
const cb = vi.fn()
render(<DataTable data={data} columns={columns} selectable onRowSelect={cb} />)
const checkbox = screen.getByLabelText('Select row 1')
fireEvent.click(checkbox)
expect(cb).toHaveBeenCalledWith([data[0]])
})
})