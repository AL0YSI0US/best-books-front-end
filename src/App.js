import React from 'react';

// Components created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
// https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Profile from './Profile';
import IsLoadingAndError from './IsLoadingAndError';

// C O M P O N E N T S 
import Header from './Header';
import MyFavoriteBooks from './MyFavoriteBooks';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// C S S 
import './App.css';

class App extends React.Component {

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header isAuthenticated={isAuthenticated}/>
            <Switch>
              <Route exact path="/">{isAuthenticated ? <MyFavoriteBooks /> : <Login />}
              </Route>
              <Route exact path="/profile">{isAuthenticated ? <Profile userInfo={user} /> : ''} 
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
