import { useState } from 'react'

import { useForm } from 'react-hook-form'

const NewTodo = ({ token, setTodos, todos }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      const fetchResponse = await fetch(API_URL, settings)
      const data = await fetchResponse.json()
      if (fetchResponse.status === 201) {
        setLoading(false)
        const newTodos = todos.concat(data)
        setTodos(newTodos)
        reset()
      }
      if (fetchResponse.status === 400) {
        setLoading(false)
        window.alert('Algo salio mal, intentalo mas tarde')
      }
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <p className="animate-pulse text-white font-semibold">{errors.content?.message}</p>
      <label className='todo-wrapper justify-between rounded-md border-0'>
        <input
          {...register('content', {
            required: {
              value: true,
              message: 'Write something'
            }
          })}
          placeholder='Create a new todo...'
          className='todo__input w-full'
        />
        <button type='submit' disabled={loading} className="whitespace-nowrap uppercase border-2 border-Dark-Grayish-Blue rounded-md px-2">
          {loading ? <div className="spinner" /> : 'Add Todo'}
        </button>
      </label>
    </form>
  )
}

export { NewTodo }
