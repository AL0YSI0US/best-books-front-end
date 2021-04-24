'use strict';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import MyFavoriteBooks from './MyFavoriteBooks.js';
import Login from './Login.js';
import Profile from './Profile';

// import Profile from './Profile.js';
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
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/" />
              {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              <Route path="/Login" component={Login} />
              <Route path="/Profile" component={Profile} />
              <Route path="/MyFavoriteBooks" component={MyFavoriteBooks} />
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
