import React, { Component } from 'react';

import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Store from 'stores/Store';

class Async extends Component {
  constructor(props) {
      super(props);
      this.state = {
          store: null
      };
  }

  componentDidMount() {
      this.props.promise.then((store) => {
        window.store = store;  
        this.setState({ store });
      });
  }

  render() {
      if (this.state.store !== null) {
        return (
          <Provider store={this.state.store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        )
      }
      return null;
  }
}

export default class Client extends Component {
  render() {
    return <Async promise={new Store()}/>;
  }
}
