import React from 'react';
import ReactDOM from 'react-dom';

// unable to have the <div> tag follow after another React.createElement call <h2> will have to wrap both in a top level <div>
const App = (props) => { // props variable passed as an argument to the function
    return (
    <div> 
        <h2 className="text-center">
            {props.headerMessage} 
        </h2>
        <div>
            ...
        </div>
    </div>

    );
};

    App.propTypes = (
        headerMessage: React.propTypes.string.isRequired // now requires a string
    );
 
ReactDOM.render(
    //React.createElement('h2', null, 'Hello React'), // we can also use HTML and JSX and variables
    <App headerMessage="Hey props!" />, // headerMessage is a variable, in React their called props!
    document.getElementById('root')
    );