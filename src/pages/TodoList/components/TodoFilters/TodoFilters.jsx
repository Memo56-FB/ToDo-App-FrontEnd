const TodoFilters = ({ filterAllTodos, filterActiveTodos, filterCompletedTodos }) => {
  return (
    <>
      <button onClick={filterAllTodos}>All</button>
      <button onClick={filterActiveTodos}>Active</button>
      <button onClick={filterCompletedTodos}>Completed</button>
    </>
  )
}

export { TodoFilters }
