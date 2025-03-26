import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text.trim() !== '') {
      onAddTodo(text);
      // Bug 3: Form doesn't reset the field after submission
      // Missing: setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button type="submit" className="add-button">Ajouter</button>
    </form>
  );
}

export default TodoForm;
