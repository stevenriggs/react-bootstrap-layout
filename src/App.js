import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/global/Header';
import Records from './components/records/Records';

function App() {
  return (
    <Container fluid className='vh-100'>
      <Row>
        <Col className='m-0 p-0'>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col className='m-0 p-0'>
          <Records />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
