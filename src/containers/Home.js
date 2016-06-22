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
    ...state
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
    onSearch: (address, radius) => dispatch(hoppyActions.search(address, radius))
  };
};

class Home extends Component {

  handleSearch() {
    const address = this.refs.address.value;
    const radius = this.refs.radius.value;

    this.props.onSearch(address, radius);
    this.refs.address.value = '';
    this.refs.radius.value = '';
  }

  render() {

    return (
      <section className="search">
        <h1>Hoppy Hour</h1>
        <div className="form">
            <input type="text" ref="address" placeholder="Type your starting address"/>
            <input type="text" ref="radius" placeholder="Radius" />
            <button onClick={this.handleSearch.bind(this)}>Search</button>
        </div>
      </section>
    );
  }
}

Home.propType = {
  onSearch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
