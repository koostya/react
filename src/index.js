import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer, { history } from './reducers/main'

import routes from './routes/index'

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), thunk)
)

export const Application = () => {ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)}

store.subscribe(Application)

Application()
