import { useForm } from 'react-hook-form'

import { Header } from '../../components/Header/Header'
import { NewTodo } from './components/NewTodo/NewTodo'
import { TodoFilters } from './components/TodoFilters/TodoFilters'
import { TodoItem } from './components/TodoItem/TodoItem'

import './TodoList.scss'

const TodoList = () => {
  const { register, handleSubmit } = useForm()

  const addTodo = async (data) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/todo`
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify(data)
    }

    try {
      const fetchResponse = await fetch(API_URL, settings)
      const data = await fetchResponse.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Header />
      <main className='padding-app flex flex-col w-full  absolute -mt-20 md:-mt-12 lg:-mt-24 2xl:-mt-44'>
        <form onSubmit={handleSubmit(addTodo)}>
          <NewTodo register={register} />
        </form>
        <section className='mt-4'>
          <TodoItem todo={'jag around the park 3x'} />
          <TodoItem todo={'10 minutes meditation'} />
          <TodoItem todo={'Read for 1 hour flkasdj jfkladsf jfklajkfj jfakdsfj lsakjalf'} />
          <div className='todo-wrapper justify-between rounded-b-md border-0 font-semibold text-Very-Dark-Grayish-Blue text-sm'>
            <span>5 items left</span>
            <div className='todo__filter hidden lg:flex'>
              <TodoFilters />
            </div>
            <button type='button' className='font-semibold'>Clear Completed</button>
          </div>

          <div className='todo__filter flex lg:hidden'>
            <TodoFilters />
          </div>
        </section>
        <footer className='grid place-items-center mt-12 text-Very-Dark-Grayish-Blue font-semibold text-sm'>
          <p>
            Drag and drop to reorder list
          </p>
        </footer>
      </main>
    </>
  )
}

export { TodoList }
