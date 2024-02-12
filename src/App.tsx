import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div className="app">
      <div>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App