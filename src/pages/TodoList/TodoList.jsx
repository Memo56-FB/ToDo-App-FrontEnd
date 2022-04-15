import { useContext, useEffect, useState } from 'react'
import { set } from 'react-hook-form'

import { Header } from '../../components/Header/Header'
import { UserContext } from '../../context/UserContext'
import { NewTodo } from './components/NewTodo/NewTodo'
import { TodoFilters } from './components/TodoFilters/TodoFilters'
import { TodoItem } from './components/TodoItem/TodoItem'

import './TodoList.scss'
// ? tal vez puedo meter en un contexto los todos al registrarse o inicar sesión
// ? despues de eso aqui puedo traer la longitud y los todos filtrados sin problema
const TodoList = () => {
  const { userData } = useContext(UserContext)
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState(undefined)

  const getTodos = async () => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/todo`
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const fetchResponse = await fetch(API_URL, settings)
      const data = await fetchResponse.json()

      if (fetchResponse.status === 200) {
        setTodos(data)
      }
    } catch (err) {
      console.error(err)
    }
  }
  const filterAllTodos = () => {
    setCompleted(undefined)
  }
  const filterActiveTodos = () => {
    setCompleted(false)
  }
  const filterCompletedTodos = () => {
    setCompleted(true)
  }

  useEffect(() => {
    getTodos()
  }, [])
 
  console.count('Render: ')
  return (
    <>
      <Header />
      <main className='padding-app flex flex-col w-full  absolute -mt-20 md:-mt-12 lg:-mt-24 2xl:-mt-44'>
        <NewTodo token={userData.token} setTodos={setTodos} todos={todos} />
        <section className='mt-4'>
          {todos.map(todo => {
            if(todo.user.id === userData.userId || todo.user === userData.userId){
              if(completed && !todo.complete) return null
              if(completed === false && todo.complete) return null
            return (<TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              token={userData.token}
            />)}
          })}
          <div className='todo-wrapper justify-between rounded-b-md border-0 font-semibold text-Very-Dark-Grayish-Blue text-sm'>
            {/* <span>{counterItems} items left</span> */}
            <div className='todo__filter hidden lg:flex'>
              <TodoFilters
                filterAllTodos={filterAllTodos}
                filterActiveTodos={filterActiveTodos}
                filterCompletedTodos={filterCompletedTodos}
              />
            </div>
            {/* <button type='button' className='font-semibold'>
              Clear Completed
            </button> */}
          </div>

          <div className='todo__filter flex lg:hidden'>
            <TodoFilters
              filterAllTodos={filterAllTodos}
              filterActiveTodos={filterActiveTodos}
              filterCompletedTodos={filterCompletedTodos}
            />
          </div>
        </section>
        <footer className='grid place-items-center mt-12 text-Very-Dark-Grayish-Blue font-semibold text-sm'>
          <p>Drag and drop to reorder list</p>
        </footer>
      </main>
    </>
  )
}

export { TodoList }
