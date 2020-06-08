import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App({name, age}) {
    return <div > Hello World from App.js by {name} {age}
      <br/>
      <Hello firstName={name}></Hello>
    </div>
}

// function App(props) {
//     return <div > Hello World from App.js by {props.name} {props.age} </div>
// }

export default App;
