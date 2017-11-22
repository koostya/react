import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import app from './reducers/main';

const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {ReactDOM.render(
  <Provider store={store}>
    <App data={store}/>
  </Provider>,
  document.getElementById('root')
)}

store.subscribe(render);

render();
