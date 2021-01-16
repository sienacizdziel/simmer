import './App.css';
import Routes from './Routes';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe Page</Link>
          <Link to="/addrecipe">Add Recipe Page</Link>
      </ul>
      <Routes />
    </div>
  );
}

export default App;
