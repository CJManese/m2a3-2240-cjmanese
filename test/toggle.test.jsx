import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toggle from '../src/components/Toggle.jsx'

describe('Toggle', () => {
  it('hides the message at first', () => {
    render(<Toggle />)
    expect(screen.queryByText('Now you see me')).not.toBeInTheDocument()
  })

  it('shows the message after one click', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    await user.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByText('Now you see me')).toBeInTheDocument()
  })

  it('hides the message again after a second click', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    const button = screen.getByRole('button', { name: 'Toggle' })
    await user.click(button)
    await user.click(button)
    expect(screen.queryByText('Now you see me')).not.toBeInTheDocument()
  })
})
