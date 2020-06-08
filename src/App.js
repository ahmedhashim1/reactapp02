import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App({name, age}) {
    return <div > The React Basic App assignment by <strong> {name} </strong>
    <p>Note that the Demo numbers can be set dynamically within custom tag of Hello</p>
      <br/>
      <br/>
      <Hello theNum="1"></Hello>
      <p>First Demo1 is for Un Ordered List:</p>
                <ul>
                 <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascrit</li>
                  <li>React</li>
                  </ul>

  }

  <Hello theNum="2"></Hello>
  <p>Second Demo is for Ordered List:</p>
            <ol>
             <li>AI</li>
              <li>Blockchain</li>
              <li>Cloud computing</li>
              <li>CNC</li>
              </ol>

}
    </div>
}

// function App(props) {
//     return <div > Hello World from App.js by {props.name} {props.age} </div>
// }

export default App;
