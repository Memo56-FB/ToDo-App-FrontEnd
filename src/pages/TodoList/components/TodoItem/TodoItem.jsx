import { DeleteTodo } from '../DeleteTodo/DeleteTodo'
import { ToggleTodoComplete } from '../ToggleTodoComplete/ToggleTodoComplete'

const TodoItem = ({ todo, token, todos, setTodos }) => {
  return (
    <div className='todo-wrapper first:rounded-t-md last:border-0'>
      <ToggleTodoComplete todo={todo} token={token} />
      <div className='flex justify-between items-center flex-1'>
        <p>{todo.content}</p>
        <DeleteTodo setTodos={setTodos} todos={todos} todo={todo} />
      </div>
    </div>
  )
}

export { TodoItem }
