import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Teno from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-vis/dist/style.css';

const container = document.getElementById('root');

ReactDOM.render(<Teno />, container);


reportWebVitals();
