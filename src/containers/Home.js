'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'immutable';

import * as hoppyActions from '../actions/hoppyActions';

const actions = [hoppyActions];

const mapStateToProps = (state)  => {
  console.log('Home::mapStateToProps', state);
  return {
    bars: state.hoppyReducer.bars
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Home::mapDispatchToProps', dispatch);
  const creators = Map()
          .merge(...actions)
          .filter((value) => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    // dispatch: dispatch,
    onSearch: (address, radius) => hoppyActions.search(address, radius, dispatch)
  };
};

class Home extends Component {

  handleSearch() {
    const address = this.refs.address.value;
    const radius = this.refs.radius.value;

    this.props.onSearch(address, radius);
    // @TODO - kbrumer - make these sticky for testing
    //this.refs.address.value = '';
    //this.refs.radius.value = '';
  }

  render() {

    const formStyle = {
        padding: '5%',
        marginTop: '20px'
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
            <input type="text" ref="address" placeholder="Type your starting address"/>
            <input type="text" ref="radius" placeholder="Radius" />
            <button className="btn" onClick={this.handleSearch.bind(this)}>Search</button>
        </section>
        <section>
        {/* map goes here*/}
        </section>
        <section>
          <div id="map"></div>
        </section>
        <section>
          <ul>
            {barHtml}
          </ul>
        </section>
      </section>
    );
  }
}

Home.propType = {
  onSearch: PropTypes.func,
  bars: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
