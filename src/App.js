import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add( faPen, faTrash );

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
