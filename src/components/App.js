import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Search</IndexLink>{' | '}
      <Link to="/results">Results</Link>{' | '}
      <Link to="/invite">Invite</Link>{' | '}
      <Link to="/venues">Venues</Link>{' | '}
      <Link to="/about">About</Link>{' | '}
      <Link to="/repos">Repos</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
