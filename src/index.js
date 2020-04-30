import React from 'react';
import ReactDOM from 'react-dom';
import App from '/components/App';
 
ReactDOM.render(
    //React.createElement('h2', null, 'Hello React'), // we can also use HTML and JSX and variables
    <App />, // headerMessage is a variable, in React their called props!
    document.getElementById('root')
    );