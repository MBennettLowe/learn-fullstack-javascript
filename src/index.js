import React from 'react';
import ReactDOM from 'react-dom';
import App from '/components/App';
 
ReactDOM.render(
    //React.createElement('h2', null, 'Hello React'), // we can also use HTML and JSX and variables
    <App />, // headerMessage is a variable, in React their called props!
    document.getElementById('root')
    );

    // This can be tested in the Dev tools console. 
    setTimeout(() => {
        ReactDOM.render( // we're forcing the App to render another element. It's going to remove the App component from the DOM and render this.
            <h2>...</h2>,
            document.getElementById('root')
        );
     },4000); // 4 seconds timer