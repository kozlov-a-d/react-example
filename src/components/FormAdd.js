import React from 'react';

function FormAdd(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="newTodo" placeholder="New todo" onChange={props.handleChange} value={props.data} />
            <button>Submit</button>
        </form>
    )
}

export default FormAdd;