import 'styles/sources';

import * as Feather from 'react-feather';

import React, { Component } from 'react';

class Static extends Component {

  render() {
    return (
      <div>
        <div className="block sources">
          <label className="block-label">DISCLAIMER</label>
          <div className="block-body">
              <div className="filler">
              <Feather.AlertOctagon size={30}/>
              <p><b>Work in Progress</b></p>
              <p>Expect things to be broken.</p>
              <p><i>Only supported on Chrome (WebUSB).</i></p>
            </div>
          </div>
        </div>
        <div className="block sources">
          <label className="block-label">CONTRIBUTIONS</label>
          <div className="block-body">
            <div className="filler">
              <p><b>Support the development of this FOSS project.</b></p>
              <p>
                <a href="https://github.com/luigifcruz/webusb-libusb">GitHub</a> |
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TAA65AJMC7498&source=url">PayPal</a> |
                <a href="https://patreon.com/luigifcruz">Patreon</a> |
                <a href="buymeacoffee.com/luigi">Buy Me A Coffee</a>
              </p>
              <p>Created by <a href="https://twitter.com/luigifcruz">@luigifcruz</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Static;
