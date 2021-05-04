import React from 'react';

// C S S 
// import './BestBook.css';
import axios from 'axios';

// C O M P O N E N T S 
import { withAuth0 } from '@auth0/auth0-react';

// B O O T S T R A P P I N ' 
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookData: [],
    };
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    console.log(user);
    console.log('about to request book data');

    const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`);
    console.log('book data exists!', bookData.data.favoriteBooks);

    this.setState({
      bookData: bookData.data.favoriteBooks
    });
  }


  render() {
    console.log(this.state.bookData);
    return (
      <>
        <Container>
          <Carousel>
            {this.state.bookData && this.state.bookData.map(book =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400/111111/111111?text=' '"
                  alt={`slide`}
                />
                <Carousel.Caption>
                  {book.name}
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default withAuth0(BestBooks);
