import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import RecordsFooter from './RecordsFooter';
import RecordsHeader from './RecordsHeader';
import RecordsTable from './RecordsTable';

function Records() {
  return (
    <div className='d-flex flex-column flex-grow-1 h-100'>
        <div className='d-flex flex-grow-0 flex-shrink-0'>
            <RecordsHeader />
        </div>
        <div className='d-flex flex-grow-1 h-50'>
            <RecordsTable />
        </div>
        <div className='d-flex flex-grow-0 flex-shrink-0'>
            <RecordsFooter />
        </div>
    </div>
  );
}

export default Records;
