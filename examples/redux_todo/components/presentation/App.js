import React from 'react';

import { AddTodo } from '../containers/AddTodo';
import { VisibleTodoList } from '../containers/VisibleTodoList';
import { Footer } from './Footer';
import { Header } from './Header';

export const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
