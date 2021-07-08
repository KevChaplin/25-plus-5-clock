import React from 'react';
import {Container, Row, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

function CountdownClock() {
  return (
    <Container fluid className="p-1 p-lg-5 text-center text-white d-flex flex-column justify-content-around">
      <Row className="m-auto">
        <h3 id="timer-label" className="display-3 text-center">Work</h3>
      </Row>
      <Row className="m-auto">
        <h1 id="time-left" className="display-1 font-weight-bold">25:00</h1>
      </Row>
      <Row className="justify-content-around">
        <Button id="start_stop" className="btn-success btn-lg btn-outline-light font-weight-bold">play/pause</Button>
        <Button id="reset" className="btn-success btn-lg btn-outline-light font-weight-bold">reset</Button>
      </Row>
    </Container>
  )
}

export default CountdownClock;
