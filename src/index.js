import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter,Route,render} from 'react-router-dom'



ReactDOM.render(
<BrowserRouter>
<div className="main">
<App />
</div>


</BrowserRouter>, document.getElementById('root'));

