import React from 'react';
import { connect } from 'react-redux';

import { TodoList } from '../presentation/TodoList'
import { toggleTodo, deleteTodo } from '../../actions/todo_actions'

const getVisibleTodos = ( todos, filter ) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}

const mapStateToTodoListProps = ( state ) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToTodoListProps = ( dispatch ) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id));
    }
  };
};
export const VisibleTodoList = connect( mapStateToTodoListProps, mapDispatchToTodoListProps )(TodoList);
