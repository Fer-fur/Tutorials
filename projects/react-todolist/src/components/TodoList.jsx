import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList( {todos, handleDeleteTodo} ) {

    

    return (
        <ul className='main'>
            {todos.map( (todo, todoIndex) => {
                return (
                    <TodoCard 
                        key={todoIndex} 
                        handleDeleteTodo= {handleDeleteTodo}
                        id={todoIndex}
                    >
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
