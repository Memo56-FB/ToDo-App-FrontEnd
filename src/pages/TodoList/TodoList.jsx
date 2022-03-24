import { NewTodo } from './components/NewTodo/NewTodo'
import { TodoFilters } from './components/TodoFilters/TodoFilters'
import { TodoItem } from './components/TodoItem/TodoItem'

import './TodoList.scss'

const TodoList = () => {
	return (
		<main className='padding-app flex flex-col w-full  absolute -mt-20 md:-mt-12 lg:-mt-24 2xl:-mt-44'>
			<form>
				<NewTodo />
			</form>
			<section className='mt-4'>
				<TodoItem todo={'jag around the park 3x'} />
				<TodoItem todo={'10 minutes meditation'} />
				<TodoItem todo={'Read for 1 hour flkasdj jfkladsf jfklajkfj jfakdsfj lsakjalf'} />
				<p className='todo-wrapper justify-between rounded-b-md border-0 font-semibold text-Very-Dark-Grayish-Blue text-sm'>
					<span>5 items left</span>
            <div className='todo__filter hidden lg:flex'>
              <TodoFilters />
            </div>
					<button type='button' className='font-semibold'>Clear Completed</button>
				</p>

        <div className='todo__filter flex lg:hidden'>
          <TodoFilters />
        </div>
			</section>
      <footer  className='grid place-items-center mt-12 text-Very-Dark-Grayish-Blue font-semibold text-sm'>
        <p>
          Drag and drop to reorder list
        </p>
      </footer>
		</main>
	)
}

export { TodoList }
