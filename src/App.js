import './App.css';
import Routes from './Routes';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe Page</Link>
          <Link to="/addrecipe">Add Recipe Page</Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
