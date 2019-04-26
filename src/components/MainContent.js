import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../todosData';
import FormAdd from "./FormAdd"

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosData,
            newTodo: "",
            count: 0,
            isLoading: true,
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    handleChangeComplited = (id) => {
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

    /**
     * Швейцарский нож для обработки форм
     * @param {*} event 
     */
    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            todos: [...prevState.todos, {
                id: 11, 
                text: this.state.newTodo + "!!!!", 
                completed: false
            }]
        }));
        this.setState(prevState => ({
            newTodo: ''
        }))
    }

    render(){
        const todoItems = this.state.todos.map( item => {
            return (<TodoItem key={item.id} item={item} handleChange={this.handleChangeComplited} />)
        });
    
        return (
            <main>
                <FormAdd data={ this.state.newTodo }  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <div className="todo-list">
                    {todoItems}
                </div>
            </main>
        )
    }
}

export default MainContent;