import React from 'react';
import PlayPauseButton from './PlayPauseButton.jsx';
const $ = require('jquery');

export default class App extends React.Component {

  constructor() {
    super();
    this.playAudioFile = this.playAudioFile.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.audioElement = document.querySelector('audio');
    const track = this.audioContext.createMediaElementSource(
      this.audioElement
    );
    track.connect(this.audioContext.destination);
  }

  playAudioFile(playAudio) {
    if (!this.audioContext) {
      return;
    }

    // check if context is in suspended state (autoplay policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    if (!playAudio) {
      this.audioElement.pause();
    } else {
      this.audioElement.play();
    }
  }

  render() {
    return (
      <div>
        <PlayPauseButton playAudioFile={this.playAudioFile}/>
        <audio src='audio/cast_your_fate_to_the_wind.mp3' type='audio/mpeg'></audio>
      </div>
    )
  }
}
