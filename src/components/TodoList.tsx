
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import TodoItem from './TodoItem'
const TodoList = () => {
    const { todos } = useSelector((state: RootState) => state.todos)

    return (
        <div className='todoWrapper'>
            {
                todos.map(item => (
                    <TodoItem item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default TodoList