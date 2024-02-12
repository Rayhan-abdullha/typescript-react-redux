import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TodoType = {
  id: string
  text: string,
  isComplete: boolean
}

interface TodosSlice<T> {
  todos: T[]
}

const initialState: TodosSlice<TodoType> = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoType>) {
      state.todos.push(action.payload)
    },
    deleteTodo(state, action: PayloadAction<string> ) {
      const filterData = state.todos?.filter((item: TodoType) => item.id !== action.payload)
      state.todos = [...filterData]
    }
  },
})
export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer