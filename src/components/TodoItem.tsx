import { useDispatch } from "react-redux"
import { TodoType, deleteTodo } from "../redux/features/todos/todosSlice"
import Button from "./shared/Button"

type TodoTypes = {
    item: TodoType
}
const TodoItem = ({ item }: TodoTypes) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodo(item.id))
    }
    const handleEdit = () => {
        console.log(item);

    }
    return (
        <div className="todoItems">
            <div className="todoContent">
                <input type="checkbox" checked={item.isComplete} />
                <p>{item.text}</p>
            </div>
            <div className="todoButton">
                <Button onClick={handleEdit} className="todoEdit">Edit</Button>
                <Button onClick={handleDelete} className="todoDelete">Delete</Button>
            </div>
        </div>
    )
}

export default TodoItem