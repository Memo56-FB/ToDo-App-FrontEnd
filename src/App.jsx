import { Route, Routes } from 'react-router-dom'

import { Auth } from './components/Auth/Auth'
import { LoginRegister } from './pages/LoginRegister/LoginRegister'
import { TodoList } from './pages/TodoList/TodoList'
function App () {
  return (
    <>
      <Routes>
        <Route element={<Auth />}>
          <Route path='/' element={<TodoList />} />
        </Route>
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/register' element={<LoginRegister />} />
      </Routes>
    </>
  )
}

export default App
