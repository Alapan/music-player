import React from 'react';
import PlayPauseButton from './PlayPauseButton.jsx';
import TrackList from './TrackList.jsx';
import AudioElement from './AudioElement.jsx';
import VolumeControl from './VolumeControl.jsx';
const $ = require('jquery');

export default class App extends React.Component {

  constructor() {
    super();
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
    this.setGainNode = this.setGainNode.bind(this);
    this.state = {
      progressValue: 0,
      musicFiles: [],
      currentTrack: '',
      trackSelected: false,
      gainNode: {}
    };
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
    this.loadAudioFiles();
  }

  setCurrentTrack(name) {
    this.setState({
      currentTrack: `audio/${name}`
    });
  }

  setGainNode(gainNode) {
    this.setState({
      gainNode
    });
  }

  render() {
    return (
      <div className='container'>
        <PlayPauseButton
          currentTrack={this.state.currentTrack}
          setGainNode={this.setGainNode}
        />
        <AudioElement currentTrack={this.state.currentTrack}>
        </AudioElement>
        <VolumeControl gainNode={this.state.gainNode}/>
        <TrackList
          musicFiles={this.state.musicFiles}
          setCurrentTrack={this.setCurrentTrack}
        />
      </div>
    )
  }
}
