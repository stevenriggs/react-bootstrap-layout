import React from 'react';
import PageControl from './PageControl';
import ItemsPerPageControl from './ItemsPerPageControl';

function RecordsFooter() {
  return (
    <div className='d-flex flex-row flex-grow-1 flex-wrap justify-content-between align-items-center bg-light border p-1'>
        <div className='d-flex p-1'>
            <ItemsPerPageControl />
        </div>
        <div className='d-flex p-1'>
            <PageControl />
        </div>
        <div className='d-flex p-1'>
            1-20 of 100
        </div>
    </div>
  );
}

export default RecordsFooter;
