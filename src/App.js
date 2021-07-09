import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import Break from './components/Break'
import Session from './components/Session'

function App() {

  const [session, setSession] = useState(25);
  const [sbreak, setSbreak] = useState(5);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(1500);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval)
    }
  }, [time, active])

  function handleClickSession(e) {
    if (e.target.id === "session-decrement") {
      session > 1 ? setSession(session - 1) : setSession(session)
    } else {
      session < 60 ? setSession(session + 1) : setSession(session)
    }
  }

  function handleClickBreak(e) {
    if (e.target.id === "break-decrement") {
      sbreak > 1 ? setSbreak(sbreak - 1) : setSbreak(sbreak)
    } else {
      sbreak < 60 ? setSbreak(sbreak + 1) : setSbreak(sbreak)
    }
  }

  function handleReset() {
    setActive(false)
    setSession(25)
    setSbreak(5)
    setTime(1500)
  }

  function handleStartStop() {
    setActive(!active)
  }

  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className="bg-success flex-fill">
        <Col className="m-auto">
          <CountdownClock time={time} handleReset={handleReset} handleStartStop={handleStartStop}/>
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
