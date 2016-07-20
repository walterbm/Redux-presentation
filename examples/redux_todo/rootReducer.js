import { combineReducers } from 'redux';
import { todos } from './reducers/todo_reducers'
import { visibilityFilter } from './reducers/visibility_reducer'

export const AppReducer = combineReducers({ todos, visibilityFilter });
// ~~~ 100% organic `combineReducers` ~~~
//
// const AppReducer = (state = {}, action) => {
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
