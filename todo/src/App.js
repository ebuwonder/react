import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';
import ListItems from './Components/ListItems';


function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Todo List App</p>
        </div>
      </header>
      <body> 
      <div>
      <Todo />
      </div>
      </body>
    </div>
  );
}

export default App;
