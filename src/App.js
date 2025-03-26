import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Apprendre React', completed: true },
    { id: 2, text: 'Créer une application Todo', completed: false },
    { id: 3, text: 'Déboguer l\'application', completed: false }
  ]);
  
  // Bug 4: Infinite loop in useEffect - missing dependency array
  useEffect(() => {
    console.log('Todos mis à jour:', todos);
    // This will cause an infinite loop because it updates the state
    // which triggers the effect again
    if (todos.length > 10) {
      setTodos(todos.slice(0, 10));
    }
  });
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  
  // Bug 2: State doesn't update correctly when marking a task as completed
  // The problem is that we're modifying the todo directly instead of creating a new object
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed; // Mutating state directly - bug
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Bug 5: Object is not a React child - trying to render an object directly
  const appInfo = { name: 'Todo App', version: '1.0.0', author: 'Debugger' };
  
  return (
    <div className="app">
      <h1>Todo List</h1>
      {/* Bug 5: Rendering an object directly */}
      <div className="app-info">{appInfo}</div>
      
      <TodoForm onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleComplete={toggleComplete} 
        onDeleteTodo={deleteTodo} 
      />
      <TodoStats todos={todos} />
    </div>
  );
}

export default App;
