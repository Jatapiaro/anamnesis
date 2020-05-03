import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const element = (
    <div>
        <h1>Hello World!</h1>
    </div>
);

ReactDOM.render(element, document.getElementById("app"));