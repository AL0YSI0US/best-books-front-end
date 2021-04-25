import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Navbar id="footerNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >&copy; Best Books 2021</Navbar.Brand>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Footer;
