import { Route, Routes } from 'react-router-dom';
import { LoginRegister } from './pages/LoginRegister/LoginRegister';
import { TodoList } from './pages/TodoList/TodoList';
function App() {
  return (
    <>
      <Routes>
        <Route path='/todos' element={<TodoList />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/register' element={<LoginRegister />} />
      </Routes>
    </>
  );
}

export default App;
