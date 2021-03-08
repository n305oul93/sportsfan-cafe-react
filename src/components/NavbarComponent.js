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

class PageNavbar extends Component {
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
      <Navbar light fixed='top' expand='md' className='pageNavbar bg-white'>
        <div className='container'>
          <NavbarBrand className='navbarBrand' href='/'>
            Sportsfan Café
          </NavbarBrand>
          {/* FIXME: menu is in middle & overlaps text */}
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/pricing'>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  Room Rentals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/photos'>
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
                {/* FIXME: btn-outline-secondary */}
                <NavLink className='nav-link btn btn-outline-secondary' to='/'>
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

export default PageNavbar
