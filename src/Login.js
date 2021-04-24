import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import './Login.css';

class Login extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);  
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              Click Below to Log In
          </Card.Text>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {isAuthenticated ? user.name : ''}
            {isAuthenticated ? <img src={user.picture} /> : ''}
            {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withAuth0(Login);
