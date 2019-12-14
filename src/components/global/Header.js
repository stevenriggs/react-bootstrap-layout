import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Header() {
    return (
        <Container fluid>
            <Row>
                <Col className='m-0 p-0'>
                    Header
                </Col>
            </Row>
        </Container>
    );
}

export default Header;