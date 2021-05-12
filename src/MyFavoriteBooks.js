import React from 'react';

// B O O T S T R A P P I N '
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

// C O M P O N E N T S
import BestBooks from './BestBook';
import BookFormModal from '.BookFormModal';

//C S S 
import './MyFavoriteBooks.css';
import { findAllByDisplayValue } from '@testing-library/dom';
import { ResponsiveEmbed } from 'react-bootstrap';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      isUpdating: false,
      name: '',
      description: '',
      status: '',
    };
  }

  componentDidMount() {
    const website = `${procss.env.REACT_APP_BACKEND_URL}/books`
    superagent.get{url}
      .query({ email: this.props.userInfo.email})
      .then(response => {
        this.setState({ books: response.body });
      })
      .catch(error;)
  }


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
          <BestBooks />
        </Container>
      </>
    )
  }
}

export default MyFavoriteBooks;
