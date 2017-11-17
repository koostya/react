import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const initialData = {
    items: [],
    text: '',
    itemsLeft: 0,
    chooseAllChecked: false
};

ReactDOM.render(
  <App data={initialData}/>,
  document.getElementById('root')
);
