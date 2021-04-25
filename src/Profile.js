import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";

// https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <Container>
          <div class="text-center">
            <Image src={user.picture} alt={user.name} title="profile picture" roundedCircle id="profilePic" />
          </div>
          <h2 class="text-center">{user.name}</h2>
          <p class="text-center">{user.email}</p>
        </Container>
        <br />
        <br />
        <br />
        <div class="text-center">Ta-Da!!!!!!!!!!!!!!!</div><br />
        <div class="text-center">when you log out and try to navigate to the profile page everything you see here will have disappeared</div><br />
        <br />
        <br />
        <br />
        <br />
        <div class="text-center">The footer stays though...we like the footer</div><br />
      </div>
    )
  );
};
export default (Profile);
