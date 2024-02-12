import { useRef, useState } from 'react'
import { TodoType, addTodo } from '../redux/features/todos/todosSlice'
import { useDispatch } from 'react-redux'
import { sendData } from '../lib'

const TodoInput = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleAdd = async (event: React.FormEvent) => {
        event.preventDefault()
        const todo: TodoType = {
            id: Math.floor(Math.random() * 5000).toString(),
            text: inputRef.current?.value ? inputRef.current?.value : '',
            isComplete: false
        }
        setLoading(true)
        const data = await sendData<TodoType>(todo)
        try {
            setLoading(false)
            dispatch(addTodo(data))
            resetInput()
        } catch (err: unknown) {
            alert('Invalid Input')
        }
    }

    const resetInput = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    };
    return (
        <form onSubmit={handleAdd}>
            <input ref={inputRef} placeholder='Enter Todo' />
            <button className='btn' type='submit'>{loading ? "Loading..." : "ADDTODO"}</button>
        </form>
    )
}

export default TodoInput