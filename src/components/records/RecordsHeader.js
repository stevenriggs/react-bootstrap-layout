import React from 'react';
import SearchControl from './SearchControl';

function RecordsHeader() {
  return (
    <div className='d-flex flex-row flex-grow-1 justify-content-between align-items-center p-2'>
        <div className='d-flex'>
            <h4>Records Title</h4>
        </div>
        <div className='d-flex'>
            <SearchControl />
        </div>
    </div>
  );
}

export default RecordsHeader;