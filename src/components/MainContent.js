import React from 'react';

import TodoItem from './TodoItem';

const MainContent = () => {
    const firstName = "Bob";
    const lastName = "Ziroll";
    // const date = new Date();

    return (
        <main>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            {/* <h2>It is currently about {date.getHours() % 12} o'clock!</h2> */}
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </main>
    )
}

export default MainContent;