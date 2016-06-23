'use strict';

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import KangarooIcon from './icons/KangarooIcon';
// import FrogIcon from './icons/FrogIcon';
// import GrasshopperIcon from './icons/GrasshopperIcon';
// import RabbitIcon from './icons/RabbitIcon';

class Navigation extends Component {
  onclick() {
      setTimeout( () => {
          this.refs.navToggle.checked = false;
      }, 700);
  }

  render() {
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

      return (
        <div>
          <label htmlFor="navToggle" className="txt--center" style={labelStyle}>HH</label>
          <input ref="navToggle" id="navToggle" type="checkbox"></input>
          <ul id="nav" style={navStyle} className="m0">
              <IndexLink onClick={this.onclick.bind(this)} to="/"><li style={liStyle}>Search</li></IndexLink>
               {/*<li><Link to="/results">Results</Link></li>*/}
              <Link onClick={this.onclick.bind(this)} to="/invite"><li style={liStyle}>Invite</li></Link>
              <Link onClick={this.onclick.bind(this)} to="/venues"><li style={liStyle}>Venues</li></Link>
              <Link onClick={this.onclick.bind(this)} to="/about"><li style={liStyle}>About</li></Link>
              <li className="txt--center">
                <KangarooIcon/>
              </li>
              {/* <li><Link to="/repos">Repos</Link></li>*/}
              <br/>
          </ul>

        </div>
      );
    }
}

export default Navigation;
