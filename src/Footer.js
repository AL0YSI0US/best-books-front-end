import React from 'react';

// B O O T S T R A P P I N '
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// C S S 
import './Footer.css';

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
