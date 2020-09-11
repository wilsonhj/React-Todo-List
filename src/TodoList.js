import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [] 
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id){
        return {...todo, task: updatedTask};
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo 
          key={todo.id} 
          id={todo.id} 
          task={todo.task} 
          completed={todo.completed}
          removeTodo={this.remove} 
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return ( 
      <div>
        <h1>Todo List</h1>
        <TodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;