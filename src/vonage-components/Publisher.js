// src/components/Publisher.js
import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';
import './vonage-styles.css';

class Publisher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        audio: true,
        video: true,
        videoSource: 'camera'
      };
    }
    setAudio = (audio) => {
        this.setState({ audio });
        }
    
    setVideo = (video) => {
    this.setState({ video });
        }

    changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
        }

    onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
        }
  
    render() {
        return (
            <div className="publisher">
            {this.state.error ? <div id="error">{this.state.error}</div> : null}
            <CheckBox
            label="Mic"
            initialChecked={this.state.audio}
            onChange={this.setAudio}
            className="checkbox-publisher"
            />
            <CheckBox
            label="Camera"
            initialChecked={this.state.video}
            onChange={this.setVideo}
            className="checkbox-publisher"
            />
            <OTPublisher
                properties={{
                publishAudio: this.state.audio,
                publishVideo: this.state.video,
                videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
                }}
                onError={this.onError}
            />
            </div>
        );
    };
  }
  export default Publisher;