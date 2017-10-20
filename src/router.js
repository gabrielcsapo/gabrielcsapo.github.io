import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Main from './main';
import Projects from './projects';

export default (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="*" component={Main} />
      </Switch>
    </Layout>
  </HashRouter>
);
