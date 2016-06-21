import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
      return (
        <div>
          {this.props.children}

          {/*  TODO close menu on selection */}
          <label htmlFor="navToggle">HH</label>
          <input id="navToggle" type="checkbox"></input>
          <ul id="nav">
              <li><IndexLink to="/">Search</IndexLink></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/invite">Invite</Link></li>
              <li><Link to="/venues">Venues</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/repos">Repos</Link></li>
              <br/>
          </ul>

        </div>
      );
    }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
