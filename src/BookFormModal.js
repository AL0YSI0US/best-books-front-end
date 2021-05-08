import { Modal } from 'bootstrap';
import React from 'react';
import { Container, Form, Modal, Button } from 'react-bootstrap';

class BookFormModal extends React.Component{
  render(){
    return(
      <Container>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={this.props.name} name="name" onChange={this.props.handleOnchange} type="text" placeholder="Enter Book Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={this.props.description} name="name" onChange={this.props.handleOnchange} type="text" placeholder="Enter Book Description" />
              </Form.Group>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={this.props.status} name="name" onChange={this.props.handleOnchange} type="text" placeholder="Enter Status" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose} >Close</Button>
            <Button variant="primary" onClick={this.props.handleSubmit} >Add Book</Button> 
          </Modal.Footer>
        </Modal>
      </Container>
    )
  };
};

export default BookFormModal;