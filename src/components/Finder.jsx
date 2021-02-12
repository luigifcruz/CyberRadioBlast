import 'styles/finder';

import * as Feather from 'react-feather';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Finder extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block finder">
        <label className="block-label">CONNECT</label>
        <div className="block-body">
          <div className="search">
            <select className="text-input">
              <option value="airspyhf">Airspy HF+ Discovery</option>
            </select>
            <button
              onClick={this.props.store.openDevice}
              className="btn btn-gray btn-connect">
              <Feather.Search size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Finder;
