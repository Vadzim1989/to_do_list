import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListPage } from './pages/TodoListPage.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute'

// TODO: add todos counter

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Routes>
        <Route  path='/todos' 
                element={
                <PrivateRoute>
                  <TodoListPage/>
                </PrivateRoute>
                }/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
