import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TableBoard from './TableBoard';
ReactDOM.render(<TableBoard />, document.getElementById('root'));
registerServiceWorker();
