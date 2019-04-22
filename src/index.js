import React from 'react';
import ReactDOM from 'react-dom';

import MyInfo from './components/MyInfo';
import App from './App';

import './index.css';
// import * as serviceWorker from './serviceWorker';

function MyApp(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
