import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Logout } from 'store/actions/user'

const Header = ({ user, Logout }) => {

  return (<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My Website</Navbar.Brand>
    <Nav className="mr-auto">
      {user.isAuth ?
        (<>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/messages">Messages</Nav.Link>
        </>)
        :
        (<>
          <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
        </>)
      }
    </Nav>

    {user.isAuth &&
      <Form inline>
        <span className="text-info mr-4">ID : {user.id} - Login : {user.login}</span>
        <Button onClick={() => Logout()} variant="info">Déconnexion</Button>
      </Form>
    }
  </Navbar>);
};

Header.propTypes = {
  //
};

export default connect(
  (state) => ({ user: state.user }),
  { Logout }
)(Header);
