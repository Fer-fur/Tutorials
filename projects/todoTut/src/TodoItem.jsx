

export default function TodoItem({ id, completed, title, toggleTodo, deleteTodo}){
    return(
        <li key={id}>
            <label htmlFor='checkbox'>
                <input 
                id='checkbox'
                type="checkbox" 
                checked={completed} 
                onChange={ e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                className='btn btn-danger'
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    )
}