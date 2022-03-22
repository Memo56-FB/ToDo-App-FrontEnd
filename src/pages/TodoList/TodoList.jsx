import { NewTodo } from './components/NewTodo'
import { TodoItem } from './components/TodoItem'

const TodoList = () => {
  return (
    <main className='padding-app flex flex-col w-full  absolute -mt-20'>
      <form>
        <NewTodo />
      </form>
      <section className='mt-4'>
        <TodoItem todo={'jag around the park 3x'} />
        <TodoItem todo={'10 minutes meditation'} />
        <TodoItem todo={'Read for 1 hour'} />
      </section>

    </main>
  )
}

export {TodoList}