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

  render() {
    let cls = '';
    if (this.state.playAudio) {
      cls = 'far fa-pause-circle fa-4x';
    } else {
      cls = 'far fa-play-circle fa-4x';
    }
    this.props.playAudioFile(this.state.playAudio);

    return (
      <div className='controls' onClick={this.changeButton}>
        <i className={cls}></i>
      </div>
    )
  }
}

PlayPauseButton.propTypes = {
  playAudioFile: PropTypes.func.isRequired
};
