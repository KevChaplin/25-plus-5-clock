import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import Break from './components/Break'
import Session from './components/Session'

// state variables
// time-remaining
// active
// session-length
// break-length


function App() {
  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className="bg-success flex-fill">
        <Col className="m-auto">
          <CountdownClock />
        </Col>
      </Row>
      <Row className="bg-white flex-fill">
        <Col sm>
          <Session />
        </Col>
        <Col sm>
          <Break />
        </Col>
      </Row>
    </Container>
  )
}
export default App
