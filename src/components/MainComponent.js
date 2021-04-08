import React, { Component } from 'react'
import HomePage from './HomePageComponent'
import Pricing from './PricingComponent'
import Photos from './PhotosComponent'
import Menu from './MenuComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/menu' component={Menu} />
          <Redirect to='/' />
        </Switch>
      </>
    )
  }
}

export default Main
