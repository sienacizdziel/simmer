import './App.css';
import React from 'react';
import Routes from './Routes';
import { Link } from "react-router-dom";
import logo from './images/logo.svg';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './vonage-components/ConnectionStatus';
import Publisher from './vonage-components/Publisher';
import Subscriber from './vonage-components/Subscriber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <>
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

      {(!this.props.apiKey || !this.props.sessionId || !this.props.token) ? <span></span> :
            <OTSession
            apiKey={this.props.apiKey}
            sessionId={this.props.sessionId}
            token={this.props.token}
            eventHandlers={this.sessionEvents}
            onError={this.onError}
            >
              {this.state.error ? <div id="error">{this.state.error}</div> : null}
              <ConnectionStatus connected={this.state.connected} />
              <Publisher />
              <OTStreams>
                <Subscriber />
              </OTStreams>
          </OTSession>
      }
    </>
    );
  }
}

export default preloadScript(App);
