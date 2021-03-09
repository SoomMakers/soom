import React from 'react';

import CommunityPage from '../pages/CommunityPage/CommunityPage';

import { Switch, Route } from 'react-router-dom';

import {
  TodoPage,
  TodoFindPage,
} from '../pages'

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/todo/find" component={TodoFindPage} />
        <Route exact path="/community" component={CommunityPage} />
      </Switch>
    </>
  );
}
