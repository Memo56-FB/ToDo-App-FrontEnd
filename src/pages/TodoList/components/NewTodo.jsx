import { useState } from 'react'

const NewTodo = () => {
	const [todoChecked, setTodoChecked] = useState(false)

	const toggleCheckedTodo = e => {
    e.preventDefault()
		setTodoChecked(!todoChecked)
	}
	return (
		<label className='todo-wrapper rounded-md border-0'>
			<button type='button'
				onClick={toggleCheckedTodo}
				className={`rounded-full cursor-pointer ${
					todoChecked ? 'todo-checked' : 'todo-unchecked'
				}`}
			>
				{todoChecked && (
					<svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
						<path
							fill='none'
							stroke='#FFF'
							stroke-width='2'
							d='M1 4.304L3.696 7l6-6'
						/>
					</svg>
				)}
			</button>
			<input
				type='text'
				name='new'
				placeholder='Create a new todo...'
				className='todo__input'
			/>
		</label>
	)
}

export { NewTodo }
