import React from 'react';
import classNames from 'classnames';

export const Todo = ({ onDelete, onClick, completed, text }) => (
  <li
    className={classNames({
      'completed': completed
    })}
    >
    <div className="view">
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={onClick}
      />
      <label>
        {text}
      </label>
      <button
        className="destroy"
        onClick={onDelete}
      />
    </div>
  </li>
);
