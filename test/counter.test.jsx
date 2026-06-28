import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../src/components/Counter.jsx'

describe('Counter', () => {
  it('starts at 0', () => {
    render(<Counter />)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('increments when the Increment button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })

  it('decrements when the Decrement button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    await user.click(screen.getByRole('button', { name: 'Decrement' }))
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
