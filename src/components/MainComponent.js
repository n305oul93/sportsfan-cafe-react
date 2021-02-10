import React, { Component } from 'react';
import MainNavbar from './NavbarComponent';
// import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <>
        <MainNavbar />
        <Switch>
          <Redirect to='/' />
        </Switch>
      </>
    );
  }
}

export default Main;
