import React, { Component } from 'react'
import MainNavbar from './NavbarComponent'
import HomePage from './HomePageComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <>
        <MainNavbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Redirect to='/' />
        </Switch>
      </>
    )
  }
}

export default Main
