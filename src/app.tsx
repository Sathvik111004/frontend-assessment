import React, { useMemo, useState } from 'react'
import { InputField } from './components/InputField'
import { DataTable, Column } from './components/DataTable'

type User = {
  id: number
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
}

const initialData: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Viewer' },
]

export default function App() {
  const [query, setQuery] = useState('')
  // Add state for password
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState<User[]>(initialData)

  const columns: Column<User>[] = useMemo(
    () => [
      { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
      { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
      { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
    ],
    []
  )

  const filtered = useMemo(
    () =>
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(query.toLowerCase()) ||
          u.email.toLowerCase().includes(query.toLowerCase())
      ),
    [users, query]
  )

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Frontend Assignment Demo</h1>
        <button
          className="btn-ghost"
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          Toggle Theme
        </button>
      </header>

      <section className="card p-6 space-y-4">
        <h2 className="text-lg font-semibold">InputField</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            label="Search users"
            placeholder="Type a name or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            size="md"
            helperText="Try typing “Alice”"
            clearable
          />
          <InputField
            label="Password"
            placeholder="••••••••"
            variant="filled"
            size="md"
            type="password"
            passwordToggle
            helperText="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-lg font-semibold">DataTable</h2>
        <DataTable<User>
          data={filtered}
          columns={columns}
          selectable
          onRowSelect={(rows) => console.log('Selected rows:', rows)}
        />
      </section>
    </div>
  )
}