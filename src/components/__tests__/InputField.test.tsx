import { render, screen, fireEvent } from '@testing-library/react'
import { InputField } from '../InputField'
import React from 'react'
import { vi } from 'vitest'

describe('InputField', () => {
  it('renders label and handles change', () => {
    const onChange = vi.fn()
    const value = ''
    render(<InputField label="Name" placeholder="Type" onChange={onChange} value={value} />)
    const input = screen.getByPlaceholderText('Type')
    fireEvent.change(input, { target: { value: 'Alice' } })
    expect(onChange).toHaveBeenCalled()
  })

  it('shows error message and aria-invalid', () => {
    const value = ''
    const onChange = vi.fn()
    render(<InputField label="Test" errorMessage="Required" value={value} onChange={onChange} />) // Added 'label="Test"'
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Required')).toBeInTheDocument()
})