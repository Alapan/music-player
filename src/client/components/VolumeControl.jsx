import React from 'react';
import PropTypes from 'prop-types';

export default class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.onVolumeChange = this.onVolumeChange.bind(this);
  }

  onVolumeChange(e) {
    this.props.gainNode.gain.value = e.currentTarget.value;
  }

  render() {
    return (
      <input
        type= 'range'
        min='0'
        max='100'
        value='70'
        onChange={this.onVolumeChange}
      />
    );
  }
}

VolumeControl.propTypes = {
  gainNode: PropTypes.object
}
