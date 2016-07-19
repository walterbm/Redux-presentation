import React from 'react';
import ReactDOM from 'react-dom';

// *** Reducers *** //
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// *** Combine Reducers *** //
import { combineReducers } from 'redux';
// ~~~ 100% organic `combineReducers` ~~~
//
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };
const todoApp = combineReducers({ todos, visibilityFilter });

// *** Action Creators *** //
let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

// *** Presentation Components *** //
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

// *** Container Components *** //
import { connect } from 'react-redux';
// ~~~ grass-fed `connect` ~~~
//
// class FilterLink extends React.Component {
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const state = store.getState();
//
//     return (
//       <Link
//         active={
//           this.props.filter ===
//           state.visibilityFilter
//         }
//         onClick={() =>
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: this.props.filter
//           })
//         }
//       >
//         {this.props.children}
//       </Link>
//     );
//   }
// }

const mapStateToLinkProps = ( state, ownProps ) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToLinkProps = ( dispatch, ownProps ) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
}
const FilterLink = connect( mapStateToLinkProps, mapDispatchToLinkProps )(Link);

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

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
    }
  };
};
const VisibleTodoList = connect( mapStateToTodoListProps, mapDispatchToTodoListProps )(TodoList);

import { createStore } from 'redux';
// ~~~ USDA organic `createStore` ~~~
//
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };
//
//   dispatch({});
//
//   return { getState, dispatch, subscribe };
// };

// exposes the store to all the components through the context
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
