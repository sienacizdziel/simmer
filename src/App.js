import './App.css';
import Routes from './Routes';
import { Link } from "react-router-dom";
import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="link-container">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/call">Kitchen Calling</Link>
          <Link className="link" to="/addrecipe">Add Recipe</Link>
          <Link className="link" to="/recipe">Find a Recipe</Link>
          <Link className="link" to="/saved">Saved Recipes</Link>
          <Link className="link" to="/search">Search</Link>
        </div>
        <Link className="link profile-link" to="/profile">User Profile</Link>
        <Link className="simmer-text" to="/"><img className="simmer" src={logo} alt="Simmer"/></Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
