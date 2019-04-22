import React from 'react';

const TodoItem = (props) => {
    let name = props.name ? props.name : 'Placeholder text here';

    return (
        // <div style={{display: props.name ? "block" : "none"}} className="todo-item">
        <div className="todo-item">
            <input type="checkbox" />
            <p>{name}</p>
        </div>
    )
}

export default TodoItem;