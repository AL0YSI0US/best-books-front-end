import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>My Favorite Books</Navbar.Brand>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            {this.props.isAuthenticated ? <LogoutButton /> : ''}
            {/* Collaborations: Allee assisted us with the isAuthenticated ternary */}
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
