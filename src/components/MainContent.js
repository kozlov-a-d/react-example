import React from 'react';

import TodoItem from './TodoItem';
import TODOS from '../todoData';

const MainContent = () => {
    const firstName = "Bob";
    const lastName = "Ziroll";
    // const date = new Date();

    const todoComponents = TODOS.map( todo => {
        return (<TodoItem key={todo.id} name={todo.name} />)
    });

    return (
        <main>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            {/* <h2>It is currently about {date.getHours() % 12} o'clock!</h2> */}
            <div className="todo-list">
                {todoComponents}
            </div>
        </main>
    )
}

export default MainContent;