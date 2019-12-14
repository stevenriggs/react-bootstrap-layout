import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import RecordsFooter from './RecordsFooter';
import RecordsHeader from './RecordsHeader';

function Records() {
  return (
    <div className='debug d-flex flex-column w-100'>
        <div className='d-flex flex-grow-0'>
            <RecordsHeader />
        </div>
        <div className='debug d-flex flex-grow-1'>
            RecordsTable
        </div>
        <div className='d-flex flex-grow-0'>
            <RecordsFooter />
        </div>
    </div>
  );
}

export default Records;
