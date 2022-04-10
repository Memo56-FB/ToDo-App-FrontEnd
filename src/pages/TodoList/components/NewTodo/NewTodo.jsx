import { useForm } from 'react-hook-form'

const NewTodo = ({ token, setTodos, todos }) => {
  const { register, handleSubmit, reset } = useForm()

  const addTodo = async (data) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/todo`
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify(data)
    }

    try {
      const fetchResponse = await fetch(API_URL, settings)
      const data = await fetchResponse.json()
      if (fetchResponse.status === 201) {
        const newTodosArray = todos.concat(data)
        setTodos(newTodosArray)
        reset()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <label className='todo-wrapper justify-between rounded-md border-0'>
        <input
          {...register('content')}
          placeholder='Create a new todo...'
          className='todo__input w-full'
        />
        <button type='submit' className="whitespace-nowrap uppercase border-2 border-Dark-Grayish-Blue rounded-md px-2">Add Todo</button>
      </label>
    </form>
  )
}

export { NewTodo }
