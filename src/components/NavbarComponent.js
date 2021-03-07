import React, { Component } from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

class MainNavbar extends Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      isNavOpen: false
    }
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }

  render() {
    return (
      <Navbar light fixed='top' expand='md'>
        <div className='container'>
          <NavbarBrand href='/'>Sportsfan Café</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Room Rentals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Request a tour
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default MainNavbar
