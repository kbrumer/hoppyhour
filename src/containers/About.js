'use strict';

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1> About </h1>
        <div className="top">
            <h2> We believe hoppiness = happiness. </h2>
            <h2> We believe drinks are better with friends. </h2>
            <h2> We believe every venue is a potential home. </h2>
        </div>
        <div>
            <ul>
                <lh>We are:</lh>
                <li>Ken: Kangaroo</li>
                <li>Cesar: Kangaroo</li>
                <li>Sarah Joy: Grasshopper</li>
            </ul>
        </div>
      </section>
    );
  }
}

export default About;
