import { useState, useEffect } from 'react'

const ToggleTodoComplete = ({ todo, token }) => {
  const [todoChecked, setTodoChecked] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleCheckedTodo = async () => {
    setTodoChecked(!todoChecked)
    setLoading(true)

    const API_URL = `${import.meta.env.VITE_API_URL}/api/todo/${todo.id}`
    const settings = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        complete: !todoChecked
      })
    }

    try {
      // TODO: agregar validaciones en caso de 200 o 400
      await fetch(API_URL, settings)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    setTodoChecked(todo.complete)
  }, [])
  return (
    <button
      type='button'
      disabled={loading}
      onClick={toggleCheckedTodo}
      className={`rounded-full cursor-pointer ${
        todoChecked ? 'todo-checked' : 'todo-unchecked'
      }`}
    >
      {todoChecked && (
        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2'
            d='M1 4.304L3.696 7l6-6'
          />
        </svg>
      )}
    </button>
  )
}

export { ToggleTodoComplete }
