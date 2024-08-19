import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])

  function handleAddTodos( newTodo ) {
    if (newTodo === "") {
      return
    }
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo( index ) {
    const newTodoList = todos.filter( (todo, todoIndex) => todoIndex !== index )
    setTodos(newTodoList);
  }

  function handleEditTodo ( index )
  {

  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos = {todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
