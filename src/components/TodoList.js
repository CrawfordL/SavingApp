import React, { useState } from 'react'; 

function TodoList() { 
    const [todos, setTodos] = useState([]); 
    const [inputValue, setInputValue] = useState(''); 
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChange(event) { 
        setInputValue(event.target.value); 
    }

    function handleSubmit() { 
        if (inputValue.trim()) { 
            if (isEditing) {
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = inputValue.trim();
                setTodos(updatedTodos);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setTodos([...todos, inputValue.trim()]); 
            }
            setInputValue(''); 
        } 
    }

    function handleDelete(index) { 
        setTodos(todos.filter((_, i) => i !== index)); 
    }

    function handleEdit(index) {
        setInputValue(todos[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return ( 
        <div> 
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Ex: Going to the store"
            /> 
            <button onClick={handleSubmit}>
                {isEditing ? "Update Todo" : "Add Todo"}
            </button> 

            <ul> 
                {todos.map((todo, index) => ( 
                    <li key={index}> 
                        {todo} 
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button> 
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
}

export default TodoList;