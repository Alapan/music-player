import React from 'react';
import PropTypes from 'prop-types';
import '../scss/ProgressBar.scss';

export default class ProgressBar extends React.Component {

  render() {
    return (
      <progress value={this.props.progressValue} max='100'>
      </progress>
    );
  }
}

React.propTypes = {
  progressValue: PropTypes.number
};
