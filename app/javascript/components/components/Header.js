import React, { Component } from 'react'
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)

    return (
      <>
        <div>
          <Navbar
            color="dark"
            dark
            expand="md"
            fixed="top"
          >
            <NavbarBrand href="/">
              StarTunes
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                {
                  <NavItem>
                    <a href="/SongShow" className="nav-link">Generator</a>
                  </NavItem>
                }
                {
                  <NavItem>
                    <a href="/About" className="nav-link">About</a>
                  </NavItem>
                }
                {logged_in &&
                  <NavItem>
                    <a href={sign_out_route} className="nav-link">Sign Out</a>
                  </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <a href={sign_in_route} className="nav-link">Sign In</a>
                  </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <a href={new_user_route} className="nav-link">Sign Up</a>
                  </NavItem>
                }
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Options
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>
                Simple Text
              </NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </>
    )
  }
}
export default Header
