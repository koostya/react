import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore } from 'redux';
import app from './reducers/main';

import { addItem, removeItem, setFilter, setAllChecked, changeCompleted, Filters } from './actions/actions';

const store = createStore(app);

const render = () => {
    ReactDOM.render(
    <App data={store}/>,
    document.getElementById('root')
  )
};

store.subscribe(render);

render();
