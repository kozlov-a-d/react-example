import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../todosData';
import Form from "./FormContainer"

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosData,
            count: 0,
            isLoading: true,
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    /**
     * Швейцарский нож для обработки форм
     * @param {*} event 
     */
    handleChangeInput(event){
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
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
                <Form/>
                <button onClick={this.handleClick}>Click me { this.state.count }</button>
                <div className="todo-list">
                    {todoItems}
                </div>
            </main>
        )
    }
}

export default MainContent;