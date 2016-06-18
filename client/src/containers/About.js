import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1>ABOUT {this.props.route.title}</h1>
        <div>This is the ABOUT page</div>
      </div>
    );
  }
}

export default About;
