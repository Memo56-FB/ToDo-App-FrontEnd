import { useState } from 'react'

const TodoItem = ({ todo }) => {
  const [todoChecked, setTodoChecked] = useState(false)

  const toggleCheckedTodo = e => {
    e.preventDefault()
    setTodoChecked(!todoChecked)
  }
  return (
    <div className='todo-wrapper first:rounded-t-md last:border-0'>
      <button type='button'
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
      <div className='flex justify-between items-center flex-1'>
        <p>{todo}</p>
        <button className='cursor-pointer' type='button'>
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
            <path
              fill='#494C6B'
              fillRule='evenodd'
              d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export { TodoItem }
