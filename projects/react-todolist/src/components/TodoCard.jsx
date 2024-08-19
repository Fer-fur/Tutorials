import React from 'react'

export default function TodoCard( {children, handleDeleteTodo, id} ) {
  return (
    <li className='todoItem' >
        {children}
        <div className='actionsContainer'>
            <button>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDeleteTodo(id)}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
