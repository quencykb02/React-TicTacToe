import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/loginform/login'

ReactDOM.render(
<BrowserRouter>
<Login />
</BrowserRouter>

, document.getElementById('root'));