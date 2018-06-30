//Component is a class
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';
/*
  create a JS class and extends from Component which is imported from the react library.

*/

class App extends Component {
  // state only available when you extends Component
  state = {
    // persons property in state that is an array
      persons: [
        { name: 'Saurabh', age: 25},
        { name: 'Reena', age: 24},
        { name: 'Ronak', age: 26},
      ],
      otherState: 'random'
  }

// this is just a normal function which handles event
  changeValuesHandler = () => {
    // console.log("Ouuch! it hurts!! But i like it.");
    this.setState({
      newperson: ["Mom", "Dad", "Sis"];
    })
  }

  render() {
    return (
      <div className="App">
      <h1>This is just a test </h1>
      <Person name={this.state.persons[0].name}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am Saurabh girlfriend</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      <button onClick={this.changeValuesHandler}>Switch Name</button>
      </div>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is Saurabh. I hate my job :)'));
  }
}


// ES6 feature. You export the App class as the default export of this file.
// If you import this file by default you will import the App class
export default App;
