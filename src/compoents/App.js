import React from 'react';
import Header from './header';


// unable to have the <div> tag follow after another React.createElement call <h2> will have to wrap both in a top level <div>
class App extends React.Component { // introducing State on the Component
    state = { // Can also use a class property on the state
        pageHeader: 'Naming Contest'
    }; 
    componentDidMount() { // lifecycle method that guarantes the DOM has been mounted in the Browser successfully 
        console.log('did mount');
        debugger;
    }
    componentWillUnmount() { // lifecycle method that says a component is about to be Unmounted
      console.log('Will Unmount'); // for this example, we will force the component to unmount by adding a timer to App
      debugger;
    }

    render() {
    return (
    <div> 
        <Header message="Naming Contest" />
        <div>
            {this.state.pageHeader}
        </div>
    </div>

    )};
};
// Constructor Example
// class App extends React.Component { // introducing State on the Component
//     constructor(props) {
//         super(props);
//         this.state = { test: 42 };
//     }
// 
// Can also use the state class property 
//class App extends React.Component {
//state = { // Can also use a class property on the state
   // test: 42 
// };

//     render() {
//     return (
//     <div> 
//         <Header message="Naming Contest" />
//         <div>
//             {this.state.test}
//         </div>
//     </div>

//     )};
// };


export default App;