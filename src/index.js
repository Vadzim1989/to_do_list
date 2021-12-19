import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListPage } from './pages/TodoListPage.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { LoginPage } from './pages/LoginPage'

// TODO: add todos counter

ReactDOM.render(
  <Provider store = {store}>
    <LoginPage/>
    {/* <TodoListPage/> */}
  </Provider>,
  document.getElementById('root')
);
