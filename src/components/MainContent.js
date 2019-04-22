import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../todosData';

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosData,
            count: 0,
            isLoading: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            });
            return {
                todos: updatedTodos
            }
        });
    }

    handleClick(){
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render(){
        const todoItems = this.state.todos.map( item => {
            return (<TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        });
    
        return (
            <main>
                <button onClick={this.handleClick}>Click me { this.state.count }</button>
                <div className="todo-list">
                    {todoItems}
                </div>
            </main>
        )
    }
}

export default MainContent;