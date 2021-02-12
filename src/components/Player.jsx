import 'styles/player';
import 'styles/volume';

import * as Feather from 'react-feather';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { ParseFrequency } from 'misc/utils';

@inject('store')
@observer
class Player extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVolume = (e) => {
    const volume = e.target.value / 100;
    this.store.setVolume(volume);
  }

  render() {
    const { playing, volume, selected } = this.store;
    const ready = (selected !== null);

    let flags = [
      <div key={3} className="flag">DISCONNECTED</div>,
    ];

    let frequency = "00,000,000";
    let sourceName = "Not Connected";
    let sourceDescription = "";
    let sourceHost = "Select or add a source below.";
    let status = ((playing) ? 'LIVE' : 'IDLE');
    let statusColor = ((playing) ? '#00897B' : '#FF4242');

    if (selected !== null) {
      let channel = ((selected.channels === 2) ? 'STEREO' : 'MONO');
      let decoder = selected.codec;
      let audio_fs = selected.audio_fs / 1000 + " kHz";

      flags = [];
      flags.push(<div key={0} className="flag">{channel}</div>);
      flags.push(<div key={1} className="flag">{decoder}</div>);
      flags.push(<div key={2} className="flag">{audio_fs}</div>);

      sourceName = selected.name;
      sourceHost = selected.host;
      sourceDescription = selected.device + " • " + selected.backend;
      frequency = ParseFrequency(selected.frequency);
    }

    return (
      <div className="block player">
        <label className="block-label">PLAYER</label>
        <div className="block-body">
          <div className="information small">
            <div className="flag">
              <div>{sourceName}</div>
              <div className="hostname">{sourceDescription}</div>
              <div className="hostname">{sourceHost}</div>
            </div>
          </div>
          <div className="frequency">{frequency}</div>
          <div className="information">
            <div className="left">
              <div
                className="flag"
                style={{background: statusColor}}>
                {status}
              </div>
            </div>
            <div className="right">
              {flags.map((component) => component)}
            </div>
          </div>
          <div className="controls">
            <button disabled={!ready} onClick={this.store.backward}>
              <Feather.SkipBack />
            </button>
            <button disabled={true} onClick={this.store.toggle}>
              {this.store.playing ? <Feather.Pause /> : <Feather.Play />}
            </button>
            <button disabled={!ready} onClick={this.store.forward}>
              <Feather.SkipForward />
            </button>
          </div>
          <div className="volume">
            <Feather.Volume1 />
            <input
              value={volume*100}
              onChange={this.handleVolume}
              className="slider"
              type="range"
              min="0"
              max="100"/>
            <Feather.Volume2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
