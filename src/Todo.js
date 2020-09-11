import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    
  }
  handleRemove(){
    this.props.removeTodo(this.props.id);
  }
  toggleForm = () => {
    this.setState({isEditing: !this.state.isEditing});
  }
  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });
    this.setState({ todos: updatedTodos });
  }
  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleToggle = (e) => {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing){
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <li onClick={this.handleToggle} className={this.props.completed ? 'completed' : ''}>{this.props.task}</li>
      </div>
      )
    }
    return result;
  }
}

export default Todo;