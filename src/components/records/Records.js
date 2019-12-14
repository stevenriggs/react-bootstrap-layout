import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Records() {
  return (
    <Container fluid>
        <Row>
            RecordsHeader
        </Row>
        <Row>
            RecordsTable
        </Row>
        <Row>
            RecordsFooter
        </Row>
    </Container>
  );
}

export default Records;
