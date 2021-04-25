import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';


class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Jumbotron>
            <h1 id="myFavBooks" class="text-center">My Favorite Books</h1>
            <p id="collection" class="text-center">
              This is a collection of my favorite books
          </p>
          </Jumbotron>
        </Container>
      </>
    )
  }
}

export default MyFavoriteBooks;
