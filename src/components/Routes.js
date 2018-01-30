import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';
import RecentWork from './RecentWork';

const routes = [
  {
    path: '/',
    navbar: () => <Nav/>,
    footer: () => <Footer/>
  },
  {
    path: '/',
    exact: true,
    main: () => <Landing/>
  },
  {
    path: '/projects',
    exact: true,
    main: () => <RecentWork/>
  },
];

class Routes extends Component {
  render() {
    return (
      <Grid container alignItems={`center`} justify={`center`} spacing={24}>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.navbar}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.main}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.footer}
            />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Routes;