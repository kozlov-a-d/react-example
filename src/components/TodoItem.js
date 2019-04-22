import React from 'react';

const TodoItem = (props) => {

    

    return (
        // <div style={{display: props.name ? "block" : "none"}} className="todo-item">
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;