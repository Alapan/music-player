import React from 'react';
import PropTypes from 'prop-types';
import '../scss/PlayPauseButton.scss';

export default class PlayPauseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playAudio: false
    };
    this.changeButton = this.changeButton.bind(this);
  }

  changeButton(e) {
    this.setState({
      playAudio: !this.state.playAudio
    });
  }

  componentDidMount() {
    this.createAudioContext();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentTrack !== this.props.currentTrack) {
      this.setState({
        playAudio: true
      });
    }
  }

  createAudioContext() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.audioElement = document.querySelector('audio');
    const track = this.audioContext.createMediaElementSource(
      this.audioElement
    );
    this.gainNode = this.audioContext.createGain();
    this.props.setGainNode(this.gainNode);
    track.connect(this.gainNode).connect(this.audioContext.destination);
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
    let cls = '';
    if (this.state.playAudio) {
      cls = 'far fa-pause-circle fa-4x';
    } else {
      cls = 'far fa-play-circle fa-4x';
    }
    this.playAudioFile(this.state.playAudio);

    return (
      <div className='controls' onClick={this.changeButton}>
        <i className={cls}></i>
      </div>
    );
  }
}

PlayPauseButton.propTypes = {
  currentTrack: PropTypes.string,
  setGainNode: PropTypes.func.isRequired
};
