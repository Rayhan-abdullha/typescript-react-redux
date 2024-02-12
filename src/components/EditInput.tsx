import { useState } from "react";
import { TodoType, updateTodo } from "../redux/features/todos/todosSlice"
import { useDispatch } from 'react-redux';
import { sendData } from "../lib";
type UpdateDataType = {
    id: string,
    text: string
}
type PropsType = {
    item: TodoType,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}
const EditInput = ({ item, setIsEdit }: PropsType) => {
    const [updateval, setUpdateVal] = useState<string>(item.text)
    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useDispatch()
    const handleClose = () => {
        setIsEdit(false)
    }
    const handleUpdated = async () => {
        setLoading(true)
        try {
            const data = await sendData<UpdateDataType>({ id: item.id, text: updateval })
            console.log('done');
            dispatch(updateTodo(data))
            setLoading(false)
            setIsEdit(false)

        } catch (err: unknown) {
            alert('Invalid Input')
            setLoading(false)
        }


    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={handleClose} className="close">&times;</span>
                        <input className="editInput" onChange={(e) => setUpdateVal(e.target.value)} value={updateval} />
                        <button className="btn" onClick={handleUpdated}>{loading ? "Loading..." : "Save to Update"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInput