import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
  <li className="todo-list__item" onClick={() => toggleComplete(todo.id, todo.completed)}>
    <div className="todo-list__item-check">
      <input
        type="checkbox"
        className="todo-list__checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id, todo.completed)}
      />
      <p className={`todo-list__item-text ${todo.completed ? 'todo-list__item-text--completed' : ''}`}>
        {todo.description}
      </p>
    </div>
    <button 
      className="todo-list__delete-button" 
      onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
      Delete
    </button>
  </li>
);

export default TodoItem;
