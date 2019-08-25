import React from 'react';
import PropTypes from 'prop-types';
import '../scss/AudioElement.scss';

export default class AudioElement extends React.Component {
  constructor(props) {
    super(props);
    this.calculateProgress = this.calculateProgress.bind(this);
    this.state = {
      progressValue: 0
    };
  }

  calculateProgress(e) {
		const elem = e.currentTarget;
		let percent = Math.floor((elem.currentTime / elem.duration) * 100);
		if (Number.isNaN(percent)) {
		  percent = 0
		};

		this.setState({
		  progressValue: percent
		});
  }

  render() {
    return (
      <div>
        <audio
          src={this.props.currentTrack}
          type='audio/mpeg'
          onTimeUpdate={this.calculateProgress}
        >
        </audio>

        <progress value={this.state.progressValue} max='100'>
        </progress>
      </div>
    );
  }
}

AudioElement.propTypes = {
  currentTrack: PropTypes.string
};
