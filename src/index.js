import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { BrowserRouter as Router } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer, { history } from './reducers/main'
import { routes } from './router/index'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export const Application = () => {ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)}

store.subscribe(Application)

Application()
