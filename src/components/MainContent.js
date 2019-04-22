import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../todosData';

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosData,
            count: 0,
            isLoading: true,
            firstName: "",
            lastName: ""
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

    handleChangeInput(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
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
                <form>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChangeInput} />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChangeInput} />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </form>
                
                <button onClick={this.handleClick}>Click me { this.state.count }</button>
                <div className="todo-list">
                    {todoItems}
                </div>
            </main>
        )
    }
}

export default MainContent;