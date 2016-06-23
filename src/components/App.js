'use strict';

import React, { PropTypes, Component } from 'react';
import Navigation from './Navigation';

class App extends Component {
  render() {

      const appStyle = {
         height: "100%"
      };

      return (
        <div style={appStyle}>
          {this.props.children}
          <Navigation/>
        </div>
      );
    }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
