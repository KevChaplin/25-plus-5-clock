import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import SetLength from './components/SetLength'

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
          <SetLength />
        </Col>
        <Col sm>
          <SetLength />
        </Col>
      </Row>
    </Container>
  )
}
export default App
