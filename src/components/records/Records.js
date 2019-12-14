import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Records() {
  return (
    <Container fluid>
        <Row>
            <Col className='m-0 p-0'>
                RecordsHeader
            </Col>
        </Row>
        <Row>
            <Col className='m-0 p-0'>
                RecordsTable
            </Col>
        </Row>
        <Row>
            <Col className='m-0 p-0'>
                RecordsFooter
            </Col>
        </Row>
    </Container>
  );
}

export default Records;
