import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

class Repos extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      repositories: []
    };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/pro-react/repos')
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Server response wasn't OK");
      }
    })
    .then((responseData) => {
      this.setState({repositories:responseData});
    })
    .catch((error) => {
      console.log('error', error);
      this.props.history.pushState(null,'/error');
    });
  }

  render() {
    let repos = this.state.repositories.map((repo) => (
      <li key={repo.id}><Link to={"/repo/"+repo.name}>{repo.name}</Link></li>
    ));

    let child = this.props.children && React.cloneElement(this.props.children,
      { repositories: this.state.repositories }
    );

    return (
      <section>
        <h1>Github Repos</h1>
        <ul>
          {repos}
        </ul>
        {child}
      </section>
    );
  }
}

export default Repos;
