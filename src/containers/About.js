'use strict';

import React, { Component } from 'react';
import KangarooIcon from '../components/icons/KangarooIcon';
import GrasshopperIcon from '../components/icons/GrasshopperIcon';

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
                <lh>Made w/ &hearts; @ Code Fellows, Portland </lh>
                <li>
                    Ken
                    <KangarooIcon/>
                </li>
                <li>
                    Cesar
                    <KangarooIcon/>
                </li>
                <li>
                    Sarah Joy
                    <GrasshopperIcon/>
                </li>
            </ul>
        </div>
      </section>
    );
  }
}

export default About;
