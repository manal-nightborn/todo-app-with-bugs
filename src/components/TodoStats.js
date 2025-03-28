import React from 'react';

function TodoStats({ todos }) {
  // Bug 1: Error of undefined property when trying to display the number of completed tasks
  // The property 'completedTasks' doesn't exist, it should be 'completed'
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  
  return (
    <div className="stats">
      <p>
        {completedCount} tâches terminées sur {totalCount} ({Math.round((completedCount / totalCount) * 100)}%)
      </p>
    </div>
  );
}

export default TodoStats;
