// ───────────────────────────────────────────────────────────────────────────
// Toggle - conditional rendering
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: boolean state, events, and conditional rendering.
// Read: content/m2-react Activity 3, and
//       content/react-theory/04-hooks-mental-model.md
//
// Requirement:
//   Keep a boolean in state, starting hidden (false).
//   - a <button> labeled exactly "Toggle" that flips the boolean
//   - when (and only when) the boolean is true, render a <p> with the text:
//       Now you see me
//
// Tip: render the paragraph conditionally; do not just hide it with CSS.

import { useState } from 'react'

export default function Toggle() {
  // TODO: declare boolean state, then return the button and (conditionally) the <p>.
  return null
}
