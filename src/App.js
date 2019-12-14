import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row} from 'react-bootstrap';
import Header from './components/global/Header';
import Records from './components/records/Records';

function App() {
  return (
    <Container fluid className='vh-100'>
      <Row>
        <Header />
      </Row>
      <Row className='h-100'>
        <Records />
      </Row>
    </Container>
  );
}

export default App;
