import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image';
import { Container } from "react-bootstrap";

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
        <Image src={user.picture} alt={user.name} title="profile picture" fluid />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </Container>
      </div>
    )
  );
};
export default (Profile);
