import React from 'react';
import Todo from './todo';

export default function Todos() {
  const todos = [
    { id: 1, title: 'Wash dishes', complete: false },
    { id: 2, title: 'Make diner', complete: true },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
