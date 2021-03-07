import React, { Component } from 'react'
import HomePage from './HomePageComponent'
import Pricing from './PricingComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/pricing' component={Pricing} />
          <Redirect to='/' />
        </Switch>
      </>
    )
  }
}

export default Main
