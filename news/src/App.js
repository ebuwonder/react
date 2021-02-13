import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './tek_logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router basename="/"/>
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>News Article Site</p>
          <p>Check out these articles</p>
          <Headlines/>
          <Sports/>
          <Weather/>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
