import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/global/Header';
import Records from './components/records/Records';

function App() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <div className='d-flex flex-grow-0 flex-shrink-0'>
        <Header />
      </div>
      <div className='d-flex flex-grow-1 h-50'>
        <Records />
      </div>
    </div>
  );
}

export default App;
