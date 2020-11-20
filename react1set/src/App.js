import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {age: 28},
      {age: 23},
      {age: 20},
    ]
  }

  switchNameHandler = (newAge)=>{
    this.setState({persons:[
      {age: newAge},
      {age: 27},
      {age: 28},
    ]})
  }

  nameChangedHandler=(event)=>{
    this.setState({persons:[
      {age: 28},
      {age: 27},
      {age: event.target.value},
    ]})
  }
  render() {
    const style={
      backgroundColor:'White',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>Hi from React</h1>
        <p>Awesome!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,'35')}>Switch ages</button>
        <Person age={this.state.persons[0].age}/>
        <Person click={this.switchNameHandler.bind(this,'45')} age={this.state.persons[1].age}>Hobby:Tabla</Person>
        <Person age={this.state.persons[2].age}
        changed={this.nameChangedHandler}/>

      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi from React'));
  }
}

export default App;
