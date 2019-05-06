import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SalariesProvider } from './SalariesContext';

ReactDOM.render(<SalariesProvider><App/></SalariesProvider>, document.querySelector('#root'));
