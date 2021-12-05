import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListPage } from './pages/TodoListPage.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'

// TODO: add todos counter

ReactDOM.render(
  <Provider store = {store}>
    <TodoListPage/>
  </Provider>,
  document.getElementById('root')
);
