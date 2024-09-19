import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <ul className="todo-list__items">
    {todos.map(todo => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />
    ))}
  </ul>
);

export default TodoList;
