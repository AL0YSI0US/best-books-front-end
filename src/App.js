import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import IsLoadingAndError from './IsLoadingAndError';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
