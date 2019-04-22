import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../todosData';

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosData
        }
    }

    handleClick(){
        console.log('test 2') 
    }

    render(){
        const todoItems = this.state.todos.map( item => {
            return (<TodoItem key={item.id} item={item} />)
        });
    
        return (
            <main>
                <button onClick={this.handleClick}>Click me</button>
                <div className="todo-list">
                    {todoItems}
                </div>
            </main>
        )
    }
}

export default MainContent;