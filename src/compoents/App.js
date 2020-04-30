import React from 'react';
import Header from './header';


// unable to have the <div> tag follow after another React.createElement call <h2> will have to wrap both in a top level <div>
const App = () => { // props variable passed as an argument to the function
    return (
    <div> 
        <Header message="Naming Contest" />
        <div>
            ...
        </div>
    </div>

    );
};

export default App;