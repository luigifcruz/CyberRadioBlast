import 'styles/app';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Player from 'components/Player';
import Finder from 'components/Finder';
import Static from 'components/Static';

@withRouter
@inject('store')
@observer
class App extends Component {

  render() {
    return (
      <div className="app main-app-dark">
        <div className="header">
          <h1>CyberRadio</h1>
          <h2>BLAST</h2>
        </div>
        <Player />
        <Finder />
        <Static />
      </div>
    );
  }

}

export default App;
