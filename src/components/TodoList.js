import React from 'react';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  // Bug 6: Map function without return statement
  // This will cause an incorrect display because it doesn't return anything
  const renderTodos = () => {
    todos.map(todo => {
      // Missing return statement here
      <li key={todo.id} className="todo-item">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
        <button
          className="todo-delete"
          onClick={() => onDeleteTodo(todo.id)}
        >
          ✖
        </button>
      </li>
    });
  };

  return (
    <ul className="todo-list">
      {renderTodos()}
    </ul>
  );
}

export default TodoList;
