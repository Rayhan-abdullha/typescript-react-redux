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
    deleteTodo(state, action: PayloadAction<string>) {
      const filterData = state.todos?.filter((item: TodoType) => item.id !== action.payload)
      state.todos = [...filterData]
    },
    isCompleteTodo(state, action: PayloadAction<string>) {
      console.log(action.payload);
      
      const updatedTodos = state.todos.map(item => {
        if (item.id === action.payload) {
          item = {
            ...item,
            isComplete: !item.isComplete
          }
          return item
        }
        return item
      })
      state.todos = [...updatedTodos]
    },
    updateTodo(state, action: PayloadAction<Record<string, string>>) {
      const updatedTodos = state.todos.map(item => {
        if (item.id === action.payload.id) {
          item = {
            ...item,
            text: action.payload.text
          }
          return item
        }
        return item
      })
      state.todos = [...updatedTodos]
    }
  },
})
export const { addTodo, deleteTodo, isCompleteTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer