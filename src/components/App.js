'use strict';

import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
      const appStyle = {
         height: "100%"
      };
      const navStyle = {
         height: 0,
         transition: 'all .5s',
         position: 'fixed',
         bottom: 0,
         width: '100%',
         listStyle: 'none',
         padding: '10px 0'
      };
      const liStyle = {
          borderBottom: '1px dotted #0D0106',
          height: '20%',
          display: 'flex',
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignItems: 'center'
      };
      const labelStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: "1",
        fontWeight: "bold",
        fontSize: "1.5em",
        width: "100%",
        backgroundColor: "#0D0106",
        cursor: "pointer"
      };
      const svgStyle = {
        height: "100px",
        width: "100px"
      };

      return (
        <div style={appStyle}>
          {this.props.children}
          <label htmlFor="navToggle" className="txt--center" style={labelStyle}>HH</label>
          <input id="navToggle" type="checkbox"></input>
          <ul id="nav" style={navStyle} className="m0">
              <IndexLink to="/"><li style={liStyle}>Search</li></IndexLink>
              <Link to="/invite"><li style={liStyle}>Invite</li></Link>
              <Link to="/venues"><li style={liStyle}>Venues</li></Link>
              <Link to="/about"><li style={liStyle}>About</li></Link>
              <li className="txt--center">
                <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g><g><path d="M94.1,31.2l-4.5-3.3l-1.1-2L85,24c-0.7-0.3-1.4-0.4-2.1-0.3l-0.2-1.8c-0.1-0.7-0.4-1.4-0.9-1.8l-1.3-1.2    c-0.3-0.3-0.8-0.4-1.2-0.2l-0.2,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.4-0.2-1-0.2-1.3,0.1l-0.2,0.1c-0.4,0.3-0.6,0.9-0.4,1.4l1,2.7    c0.3,0.8,1,1.5,1.8,1.9l0.4,0.2c0,0,0,0.1-0.1,0.1l-3,6.9C76,34,74.4,35,72.5,35H72l0,0h-8.7c-14.8,0-26.9,12-26.9,26.9v5.8    c0,5.7-4.6,10.2-10.2,10.2L7.7,79c-1.3,0-2.3,1-2.3,2.3H26h3.6c6.6,0,12.4-4.2,14.4-10.5l1.8-5.5c2,1.7,4.6,2.7,7.4,2.7    c0.6,0,1.2,0,1.8-0.1l0.9,1.3v3.9l-1.7,6.3c-0.2,0.9,0.5,1.8,1.5,1.8h20.7c0-0.5-0.2-0.9-0.5-1.2h2.8c0-0.5-0.2-0.9-0.5-1.2    c-0.3-0.3-0.8-0.5-1.3-0.5h-1.6l-1.1-1H63.4c-0.8,0-1.4-0.6-1.4-1.4v-8.5l4.4-11.9l6.8-3.9l2.1,5.3v8.3c1.1,0,2-0.7,2.3-1.7    c1-0.3,1.8-1.2,1.8-2.3V50c0-0.8,0.1-1.6,0.2-2.4c3.4-2.9,5.4-7.1,5.4-11.7v-0.5c0-0.6,0.5-1.1,1.1-1.1h2.9l2.6,0.7    c0.6,0.2,1.2-0.1,1.5-0.6h0.9l0.5-1.1C94.9,32.6,94.7,31.7,94.1,31.2z"/></g></g></svg>
              </li>
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
