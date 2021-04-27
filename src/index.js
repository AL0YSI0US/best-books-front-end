import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Components created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0   ✔️- done
ReactDOM.render(
  <Auth0Provider
  domain="aloysious.us.auth0.com"
  clientId="ZP07iTTlSrWB37rkjnGoH4bPEnnNGHgs"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
document.getElementById("root")
);
