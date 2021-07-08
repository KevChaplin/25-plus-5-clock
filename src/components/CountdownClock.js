import React from 'react';
import {Container, Row, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

function CountdownClock() {
  return (
    <Container fluid className="p-1 p-lg-5 text-center text-white d-flex flex-column justify-content-around">
      <Row className="m-auto">
        <h3 className="display-3 text-center">Work</h3>
      </Row>
      <Row className="m-auto">
        <h1 className="display-1 font-weight-bold">25:00</h1>
      </Row>
      <Row className="justify-content-around">
        <Button className="btn-success btn-lg btn-outline-light font-weight-bold">play/pause</Button>
        <Button className="btn-success btn-lg btn-outline-light font-weight-bold">reset</Button>
      </Row>
    </Container>
  )
}

export default CountdownClock;
