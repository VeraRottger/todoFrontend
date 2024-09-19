import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import DarkModeToggle from './Components/DarkModeToggle';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newTodo, completed: false }),
    })
    .then(response => response.json())
    .then(data => {
      setTodos([...todos, data]);
      setNewTodo("");
    });
  };

  const toggleComplete = (id, completed) => {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })
    .then(response => response.json())
    .then(updatedTodo => {
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'app--dark' : ''}`}>
      <div className="todo-list">
        <h1 className="todo-list__title">Todo List</h1>
        <div className="todo-list__topbar">
          <input 
            type="text" 
            className="todo-list__input" 
            value={newTodo} 
            onChange={e => setNewTodo(e.target.value)} 
            onKeyDown={e => (e.key === 'Enter' ? addTodo() : null)} 
          />
          <button className="todo-list__add-button" onClick={addTodo}>Add</button>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
