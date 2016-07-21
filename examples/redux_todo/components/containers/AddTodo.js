import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions/todo_actions'

const ENTER_KEY_CODE = 13;

const AddTodoComponent = ({ dispatch }) => {
  let input;

  const save = (input) => {
    dispatch(addTodo(input.value));
    input.value = '';
  }

  return (
    <div>
      <input
        id='new-todo'
        placeholder='Buy acid reflux medication'
        autoFocus={true}
        onKeyDown={(event) => {
          if (event.keyCode === ENTER_KEY_CODE) {
            save(input)
          }
        }}
        ref={node => { input = node; }}
      />
    </div>
  );
};
export const AddTodo = connect()(AddTodoComponent);
