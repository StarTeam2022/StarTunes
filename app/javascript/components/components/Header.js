import React, { Component } from 'react'
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavLink,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap'
import logo2 from '../assets/logo2.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <div>
        <div>
          <Navbar color="dark" dark expand="md" fixed="top">
            <NavbarBrand href="/">StarTunes</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.collapse} navbar>
              <Nav className="me-auto" navbar>
                {
                  <NavItem>
                    <a href="/SongShow" className="nav-link">
                      Generator
                    </a>
                  </NavItem>
                }
                {
                  <NavItem>
                    <a href="/About" className="nav-link">
                      About
                    </a>
                  </NavItem>
                }
                {logged_in && (
                  <NavItem>
                    <a href={sign_out_route} className="nav-link">
                      Sign Out
                    </a>
                  </NavItem>
                )}
                {!logged_in && (
                  <NavItem>
                    <a href={sign_in_route} className="nav-link">
                      Sign In
                    </a>
                  </NavItem>
                )}
                {!logged_in && (
                  <NavItem>
                    <a href={new_user_route} className="nav-link">
                      Sign Up
                    </a>
                  </NavItem>
                )}
                {logged_in && (
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Options
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem>
                        <NavItem>
                          <NavLink href="/SongNew" style={{ color: 'black' }}>Create</NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/SongIndex" style={{ color: 'black' }}>My Songs</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Nav>
              <NavbarText>
                <img className='img-header' src={logo2} alt="logo" />
              </NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
export default Header
