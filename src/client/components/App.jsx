import React from 'react';
import PlayPauseButton from './PlayPauseButton.jsx';
import ProgressBar from './ProgressBar.jsx';
import TrackList from './TrackList.jsx';
const $ = require('jquery');

export default class App extends React.Component {

  constructor() {
    super();
    this.playAudioFile = this.playAudioFile.bind(this);
    this.calculateProgress = this.calculateProgress.bind(this);
    this.state = {
      progressValue: 0,
      musicFiles: []
    };
  }

  createAudioContext() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.audioElement = document.querySelector('audio');
    const track = this.audioContext.createMediaElementSource(
      this.audioElement
    );
    track.connect(this.audioContext.destination);
  }

  loadAudioFiles() {
    $.ajax({
      url: '/musicFiles',
      type: 'GET',
      dataType: 'json'
    }).then((musicFiles) => {
      this.setState({ musicFiles });
    });
  }

  componentDidMount() {
    this.createAudioContext();
    this.loadAudioFiles();
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

  calculateProgress(e) {
    const elem = e.currentTarget;
    const percent = Math.floor((elem.currentTime / elem.duration) * 100);
    this.setState({
      progressValue: percent
    });
  }

  render() {
    return (
      <div className='container'>
        <PlayPauseButton playAudioFile={this.playAudioFile}/>
        <audio
          src='audio/cast_your_fate_to_the_wind.mp3'
          type='audio/mpeg'
          onTimeUpdate={this.calculateProgress}
        >
        </audio>
        <ProgressBar progressValue={this.state.progressValue}>
        </ProgressBar>
        <TrackList musicFiles={this.state.musicFiles} />
      </div>
    )
  }
}
