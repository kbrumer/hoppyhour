'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as hoppyActions from '../actions/hoppyActions';

const mapStateToProps = (state)  => {
  // console.log('Home::mapStateToProps', state);
  return {
    bars: state.hoppyReducer.bars
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log('Home::mapDispatchToProps', dispatch);
  return {
    onSearch: (address, radius) => hoppyActions.search(address, radius, dispatch)
  };
};

class Home extends Component {

  handleSearch() {
    const address = this.refs.address.value;
    const radius = this.refs.radius.value;

    this.props.onSearch(address, radius);
    // this.refs.address.value = '';
    // this.refs.radius.value = '';
  }

  render() {

    const formStyle = {
        padding: '5%',
        marginTop: '20px'
    };

    const mapStyle = {
        position: "absolute",
        overflow: "hidden",
        height: "50%",
        width: "100%"
    };

    let barHtml = this.props.bars.map((bar) => {
      return (
        <li key={bar.id}>{bar.name}</li>
      );
    });

    return (
      <section className="search">
      <h1>Hoppy Hour</h1>
        <section className="form" style={formStyle}>
            <input type="text" ref="address" defaultValue="510 SW 2nd Ave Portland OR" placeholder="Type your starting address"/>
            <input type="text" ref="radius" defaultValue="300" placeholder="Radius (in meters)" />
            <button className="btn" onClick={this.handleSearch.bind(this)}>Search</button>
        </section>
        <section>
          <div style={mapStyle} id="map"></div>
        </section>
        <section>
          <h2>Bar List</h2>
          <ul>
            {barHtml}
          </ul>
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  onSearch: PropTypes.func,
  bars: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
