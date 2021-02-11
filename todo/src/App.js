// import logo from './logo.svg';
import {useState} from 'react';

import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Create a Todo List App</p>
         <Todo />
        </div>
      </header>
    </div>
  );
}

export default App;
