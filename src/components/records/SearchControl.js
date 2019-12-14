import React from 'react';
import {FormControl} from 'react-bootstrap';

function SearchControl() {
  return (
    <div>
        <FormControl
            placeholder="Search..."
            type="input"
        />
    </div>
  );
}

export default SearchControl;