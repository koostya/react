import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { BrowserRouter as Router } from 'react-router-dom'
import { routerMiddleware, routerReducer, push, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Routes from './router/index'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducers/main'
import { routes } from './router/index'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)