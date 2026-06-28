import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from '../src/components/TodoList.jsx'

describe('TodoList', () => {
  it('adds a typed item to the list', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    await user.type(screen.getByRole('textbox'), 'Buy milk')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })

  it('adds multiple items', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    const input = screen.getByRole('textbox')
    const add = screen.getByRole('button', { name: 'Add' })
    await user.type(input, 'First')
    await user.click(add)
    await user.type(input, 'Second')
    await user.click(add)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('clears the input after adding', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    const input = screen.getByRole('textbox')
    await user.type(input, 'Something')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(input).toHaveValue('')
  })

  it('ignores empty input', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
