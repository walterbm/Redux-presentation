import React from 'react';

import { Todo } from './Todo'

export const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <ul id="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
);
