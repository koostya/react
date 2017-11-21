import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import app from './reducers/main';

import { addItem, removeItem, setFilter, setAllChecked, changeCompleted, Filters } from './actions/actions';

const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App data={store}/>
  </Provider>,
  document.getElementById('root')
)
