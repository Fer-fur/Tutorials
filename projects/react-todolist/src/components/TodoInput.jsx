import { useState } from 'react'

export default function TodoInput( {handleAddTodos} ) {

    const [todoValue, setTodoValue] = useState("")
  
    return (
    <header>
        <input 
            type="text" 
            placeholder='Enter todo...' 
            onChange={e => setTodoValue(e.target.value)}
            value={todoValue}
        />
        <button onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue("");
        }}> 
            Add 
        </button>
    </header>
  )
}
