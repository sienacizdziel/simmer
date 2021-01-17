import React from "react";
import "./Call.css";
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from '../vonage-components/ConnectionStatus';
import Publisher from '../vonage-components/Publisher';
import Subscriber from '../vonage-components/Subscriber';
import { Link } from 'react-router-dom';

class Call extends React.Component {
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

  render () {
      return (
        <>
        <button><Link to="/call">leave call</Link></button>
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
          </OTSession>}
        </>
    );
    }
}

export default preloadScript(Call);