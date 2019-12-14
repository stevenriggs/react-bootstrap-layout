import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PageControl() {
  return (
    <div>
        <Pagination className='m-0 p-0'>
            <Pagination.Prev />
            <Pagination.Item disabled>Page 1</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    </div>
  );
}

export default PageControl;
