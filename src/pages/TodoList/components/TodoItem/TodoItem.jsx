import { useState } from 'react'

import { DeleteTodo } from '../DeleteTodo/DeleteTodo'

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
        <p>{todo.content}</p>
        <DeleteTodo todo={todo} />
      </div>
    </div>
  )
}

export { TodoItem }
