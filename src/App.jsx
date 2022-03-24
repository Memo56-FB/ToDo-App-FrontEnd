import { Route, Routes } from 'react-router-dom';
import { TodoList } from './pages/TodoList/TodoList';
function App() {
  return (
    <>
      <Routes>
        <Route path='/todos' element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
