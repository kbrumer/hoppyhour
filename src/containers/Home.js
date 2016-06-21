import React, { Component } from 'react';

class Home extends Component {
  onClick(){
    console.log("button was clicked!");
  }

  render() {
    return (
      <div>
        <h1>Hoppy Hour</h1>
        <input type="text" placeholder="Type your starting address"/>
        <input type="text" placeholder="Radius" />
        <button type="submit" onClick={this.onClick.bind(this)}>Search</button>
      </div>
    );
  }
}

export default Home;
