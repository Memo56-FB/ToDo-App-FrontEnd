const TodoFilters = ({ filterAllTodos, filterActiveTodos, filterCompletedTodos, completed }) => {
  return (
    <>
      <button onClick={filterAllTodos} className={completed === undefined ? 'text-Light-Grayish-Blue(hover)' : null}>All</button>
      <button onClick={filterActiveTodos} className={completed === false ? 'text-Light-Grayish-Blue(hover)' : null}>Active</button>
      <button onClick={filterCompletedTodos} className={completed ? 'text-Light-Grayish-Blue(hover)' : null}>Completed</button>
    </>
  )
}

export { TodoFilters }
