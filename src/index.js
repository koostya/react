import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import app from './reducers/main';

import { getAllItems } from './actions/actions';

const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

store.dispatch(getAllItems())

const render = () => {ReactDOM.render(
  <Provider store={store}>
    <App data={store}/>
  </Provider>,
  document.getElementById('root')
)}

store.subscribe(render);

render();
