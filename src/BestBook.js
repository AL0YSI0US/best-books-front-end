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

    this.setState.state = {};
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;

    console.log('about to request book data');
    const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/book?user=${user.email}`);
    console.log('book data exists!', bookData);

    this.setState({
      books: bookData.favoriteBooks
    });
  }


  render() {
    return (
      <>
        <Container>
          <h1>📚</h1>
          {this.state.book && this.state.book.map(book => <h3 key={book._id}>{book.bookName}</h3>)}
        </Container>
      </>
    )
  }
}

export default withAuth0(BestBooks);
