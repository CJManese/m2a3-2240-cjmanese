// ───────────────────────────────────────────────────────────────────────────
// TodoList - state, events, and lists together
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: state, controlled input, events, and rendering a list.
// Read: content/m2-react Activity 3, and
//       content/react-theory/02-virtual-dom-and-rendering.md (keys)
//
// Requirement:
//   Keep two pieces of state: the current input text, and the array of todos.
//   - a text <input> (its value comes from state: a controlled input)
//   - a <button> labeled exactly "Add"
//   - clicking "Add" appends the input's text as a new item, then clears the input
//   - render the todos as a <ul> with one <li> per item
//   - ignore empty input: clicking "Add" with blank text adds nothing
//
// Reminder: add to array state immutably ([...todos, newItem]), never .push().

import { useState } from 'react'

export default function TodoList() {
  // TODO: declare the two pieces of state, then return the input, button, and list.
  return null
}
