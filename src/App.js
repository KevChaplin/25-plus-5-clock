import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import Break from './components/Break'
import Session from './components/Session'

function App() {

  const [session, setSession] = useState(25);
  const [sbreak, setSbreak] = useState(5);

  function handleClickSession(e) {
    if (e.target.id === "session-decrement") {
      session > 1 ? setSession(session - 1) : setSession(session)
    } else {
      setSession(session + 1)
    }
  }

  function handleClickBreak(e) {
    if (e.target.id === "break-decrement") {
      sbreak > 1 ? setSbreak(sbreak - 1) : setSbreak(sbreak)
    } else {
      setSbreak(sbreak + 1)
    }
  }


  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className="bg-success flex-fill">
        <Col className="m-auto">
          <CountdownClock />
        </Col>
      </Row>
      <Row className="bg-white flex-fill">
        <Col sm>
          <Session session={session} handleClickSession={handleClickSession}/>
        </Col>
        <Col sm>
          <Break sbreak={sbreak} handleClickBreak={handleClickBreak}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
