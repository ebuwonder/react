import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Details from "./Views/Details";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router basename="/">
        <NavBar />
        <div>
              <Route exact path="/" component={Headlines} />
              <Route exact path="/Sports" component={Sports} />
              <Route exact path="/Weather" component={Weather} />
              <Route exact path="/Details" component={Details} />
            </div>
          </Router>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
