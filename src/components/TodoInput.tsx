import { useRef } from 'react'
import { TodoType, addTodo } from '../redux/features/todos/todosSlice'
import { useDispatch } from 'react-redux'

const TodoInput = () => {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault()
        const todo: TodoType = {
            id: Math.floor(Math.random() * 5000).toString(),
            text: inputRef.current?.value ? inputRef.current?.value : '',
            isComplete: false
        }
        dispatch(addTodo(todo))
    }
    return (
        <form onSubmit={handleAdd}>
            <input ref={inputRef} placeholder='Enter Todo' />
            <button className='btn' type='submit'>ADD TODO</button>
        </form>
    )
}

export default TodoInput