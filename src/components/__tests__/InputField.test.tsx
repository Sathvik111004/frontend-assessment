import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect } from 'vitest'
import { InputField } from '../InputField'

describe('InputField Component', () => {
  it('renders label and updates value on typing', async () => {
    const onChange = vi.fn()
    render(
      <InputField
        label="Name"
        placeholder="Type here"
        value=""
        onChange={onChange}
      />
    )

    const input = screen.getByPlaceholderText('Type here')

    // Simulate typing
    await userEvent.type(input, 'Alice')

    // Wait for onChange to be called
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled()
    })

    // Verify the value passed to onChange
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(lastCall.target.value).toBe('Alice')
  })

  it('displays error message and sets aria-invalid', () => {
    const onChange = vi.fn()
    render(
      <InputField
        label="Email"
        value=""
        errorMessage="Required"
        onChange={onChange}
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    const error = screen.getByText('Required')
    expect(error).toBeInTheDocument()
  })
})
