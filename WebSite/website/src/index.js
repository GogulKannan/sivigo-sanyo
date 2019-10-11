import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

// Create history object.
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// Listen to history changes.
// You can unlisten by calling the constant (`unlisten()`).
history.listen((location, action) => {
    window.scrollTo(0, 0)
});


const app = (
    <HashRouter history={history}>
        <App />
    </HashRouter>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
