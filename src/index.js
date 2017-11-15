import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const initialData = {
    items: [{
        id: 1233,
        completed: false,
        text: 'ewf',
        checkboxID: 54
    }],
    text: '',
    itemsLeft: 0,
    showMenu: false,
    chooseAll: false
};

ReactDOM.render(
  <App data={initialData}/>,
  document.getElementById('root')
);
