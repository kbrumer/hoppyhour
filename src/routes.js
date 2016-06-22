'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/Home';
import RepoPage from './containers/Repos';
import ResultPage from './containers/Results';
import VenuePage from './containers/Venues';
import InvitePage from './containers/Invites';
import RepoDetails from './components/RepoDetails';
import AboutPage from './containers/About';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="repos" component={RepoPage}>
      <Route path="/repo/:repo_name" component={RepoDetails} />
    </Route>
    <Route path="about" component={AboutPage}/>
    <Route path="venues" component={VenuePage}/>
    <Route path="invite" component={InvitePage}/>
    <Route path="results" component={ResultPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
