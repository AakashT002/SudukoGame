import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TableBoard from './TableBoard';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <TableBoard />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
