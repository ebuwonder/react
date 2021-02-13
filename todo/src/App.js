import logo from './tek_logo.png';
import './App.css';
import TodoList from './Components/Todo';
import Items from './Components/Items';


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
      <TodoList />
      </div>
      </body>
    </div>
  );
}

export default App;
