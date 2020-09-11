import React, { Component } from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        <div className='Todo'>
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className='Todo'>
          <li 
            onClick={this.handleToggle} 
            className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <FontAwesomeIcon icon='pen' />
            </button>
            <button onClick={this.handleRemove}>
              <FontAwesomeIcon icon='trash' />
            </button>
          </div>
      </div>
      );
    }
    return result;
  }
}

export default Todo;