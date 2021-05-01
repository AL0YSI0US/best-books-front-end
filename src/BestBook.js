import React from 'react';

// C S S 
// import './BestBook.css';
import axios from 'axios';

// C O M P O N E N T S 
import { withAuth0 } from '@auth0/auth0-react';

// B O O T S T R A P P I N ' 
import Container from 'react-bootstrap/Container';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    console.log(user);

    console.log('about to request book data');
    const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`);
    console.log('book data exists!', bookData.data);

    this.setState({
      books: bookData.data
    });
  }


  render() {
    console.log(this.state.books);
    return (
      <>
        <Container>
          <h1>Best Books</h1>
          {this.state.books && this.state.books.favoriteBooks.map(book => <h3 key={book._id}>{book.name}</h3>)}
        </Container>
      </>
    )
  }
}

export default withAuth0(BestBooks);
