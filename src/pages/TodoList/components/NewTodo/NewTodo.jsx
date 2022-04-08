import { useState } from 'react'

const NewTodo = ({ register }) => {
  const [todoChecked, setTodoChecked] = useState(false)

  const toggleCheckedTodo = e => {
    setTodoChecked(!todoChecked)
  }
  return (
    <label className='todo-wrapper rounded-md border-0'>
      <button
        type='submit'
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
      <input
        {...register('content')}
        placeholder='Create a new todo...'
        className='todo__input'
      />
    </label>
  )
}

export { NewTodo }
