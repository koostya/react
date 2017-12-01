import React from 'react'
import ReactDOM from 'react-dom'
import { registration as Registration } from './containers/Registration'
import { app as App } from './containers/App'
import thunk from 'redux-thunk'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer, { history } from './reducers/main'
import { getAllItems } from './actions/actions'

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), thunk)
)

export const Application = () => {ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/list">
          <App />
        </Route>
        <Route path="/">
          <Registration />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)}

store.subscribe(Application)

Application()
