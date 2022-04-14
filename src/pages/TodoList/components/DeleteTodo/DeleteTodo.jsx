import { useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'

const DeleteTodo = ({ todo, todos, setTodos }) => {
  const { userData } = useContext(UserContext)

  const removeTodo = async () => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/todo/${todo.id}`
    const settings = {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${userData.token}`
      }
    }

    try {
      const fetchResponse = await fetch(API_URL, settings)
      if (fetchResponse.status === 204) {
        const newTodos = todos.filter(todoFilter => todoFilter.id !== todo.id)
        setTodos(newTodos)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button onClick={removeTodo} className='cursor-pointer' type='button'>
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
        <path
          fill='#494C6B'
          fillRule='evenodd'
          d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
        />
      </svg>
    </button>
  )
}

export { DeleteTodo }
