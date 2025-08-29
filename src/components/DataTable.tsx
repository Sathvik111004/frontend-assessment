import React from 'react'
import { clsx } from 'clsx'

export interface Column<T> {
  key: string
  title: string
  dataIndex: keyof T
  sortable?: boolean
  render?: (value: any, row: T) => React.ReactNode
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  onRowSelect?: (selectedRows: T[]) => void
  emptyText?: string
}

type SortState<T> = { key: keyof T | null; direction: 'asc' | 'desc' | null }

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
  emptyText = 'No data',
}: DataTableProps<T>) {
  const [sort, setSort] = React.useState<SortState<T>>({ key: null, direction: null })
  const [selected, setSelected] = React.useState<Set<number>>(new Set())

  const sortedData = React.useMemo(() => {
    if (!sort.key || !sort.direction) return data
    const copy = [...data]
    copy.sort((a, b) => {
      const av = a[sort.key as string]
      const bv = b[sort.key as string]
      if (av == null && bv == null) return 0
      if (av == null) return 1
      if (bv == null) return -1
      if (typeof av === 'number' && typeof bv === 'number') {
        return sort.direction === 'asc' ? av - bv : bv - av
      }
      return sort.direction === 'asc'
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av))
    })
    return copy
  }, [data, sort])

  function toggleSort(col: Column<T>) {
    if (!col.sortable) return
    setSort(prev => {
      const key = col.dataIndex as keyof T
      if (prev.key !== key) return { key, direction: 'asc' }
      if (prev.direction === 'asc') return { key, direction: 'desc' }
      return { key: null, direction: null }
    })
  }

  function toggleRow(idx: number) {
    if (!selectable) return
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      onRowSelect?.(Array.from(next).map(i => sortedData[i]))
      return next
    })
  }

  function toggleAll() {
    if (!selectable) return
    setSelected(prev => {
      if (prev.size === sortedData.length) {
        onRowSelect?.([])
        return new Set()
      }
      const all = new Set(sortedData.map((_, i) => i))
      onRowSelect?.(Array.from(all).map(i => sortedData[i]))
      return all
    })
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            {selectable && (
              <th className="px-3 py-2 text-left w-10">
                <input
                  aria-label="Select all rows"
                  type="checkbox"
                  checked={selected.size === sortedData.length && sortedData.length > 0}
                  onChange={toggleAll}
                />
              </th>
            )}
            {columns.map(col => (
              <th
                key={col.key}
                scope="col"
                className="px-3 py-2 text-left font-semibold select-none"
              >
                <button
                  className={clsx(
                    'inline-flex items-center gap-1',
                    col.sortable && 'cursor-pointer'
                  )}
                  onClick={() => toggleSort(col)}
                  aria-label={col.sortable ? `Sort by ${col.title}` : undefined}
                >
                  {col.title}
                  {sort.key === col.dataIndex && (
                    <span aria-hidden>{sort.direction === 'asc' ? '▲' : '▼'}</span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-3 py-6 text-center"
              >
                Loading…
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-3 py-6 text-center text-gray-500"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => (
              <tr
                key={i}
                className={clsx(
                  'border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900'
                )}
              >
                {selectable && (
                  <td className="px-3 py-2">
                    <input
                      aria-label={`Select row ${i + 1}`}
                      type="checkbox"
                      checked={selected.has(i)}
                      onChange={() => toggleRow(i)}
                    />
                  </td>
                )}
                {columns.map(col => (
                  <td key={col.key} className="px-3 py-2 align-top">
                    {col.render
                      ? col.render(row[col.dataIndex], row)
                      : String(row[col.dataIndex] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
