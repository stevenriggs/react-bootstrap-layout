import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row} from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='vh-100'>
      <Row>
        Header
      </Row>
      <Row className='h-100'>
        Content
      </Row>
    </Container>
  );
}

export default App;
