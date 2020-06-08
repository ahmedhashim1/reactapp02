import React from 'react';
import './Hello.css'


function Hello({firstName}) {
    return <p className="myname" >This is para in Hello tag name: {firstName}</p>
}

// function App(props) {
//     return <div > Hello World from App.js by {props.name} {props.age} </div>
// }

export default Hello;
