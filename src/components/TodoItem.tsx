import { useDispatch } from "react-redux"
import { TodoType, deleteTodo, isCompleteTodo } from "../redux/features/todos/todosSlice"
import Button from "./shared/Button"
import { useState } from "react"
import EditInput from "./EditInput"

type TodoTypes = {
    item: TodoType
}
const TodoItem = ({ item }: TodoTypes) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodo(item.id))
    }
    const handleEdit = () => {
        setIsEdit(prev => !prev)
    }
    const handleIsCompelete = () => {
        dispatch(isCompleteTodo(item.id))
    }
    return (
        <div className="todoItems">
            <div className="todoContent">
                <input onChange={handleIsCompelete} type="checkbox" checked={item.isComplete} />

                <p style={{}}>{item.text}</p>

            </div>
            <div className="todoButton">
                <Button onClick={handleEdit} className="todoEdit">{isEdit ? "Save" : "Edit"}</Button>
                <Button onClick={handleDelete} className="todoDelete">Delete</Button>
            </div>
            {
                isEdit && <EditInput setIsEdit={setIsEdit} item={item} />
            }
        </div>
    )
}

export default TodoItem