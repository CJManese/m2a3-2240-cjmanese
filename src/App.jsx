import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.jsx'
import TodoList from './components/TodoList.jsx'

// A playground so `npm run dev` shows your components running. Not graded; the
// grade comes from the tests in test/.
export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Activity 3 - State, events, lists</h1>
      <section><h2>Counter</h2><Counter /></section>
      <section><h2>Toggle</h2><Toggle /></section>
      <section><h2>Todo list</h2><TodoList /></section>
    </main>
  )
}
