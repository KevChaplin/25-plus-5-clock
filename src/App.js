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
  const [mode, setMode] = useState("Work");

//interval timer
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval)
    }
  }, [time, active])


// handle click for adjusting session length
  function handleClickSession(e) {
    if (e.target.id === "session-decrement") {
      if (session > 1) {setSession(session - 1)}
      if (mode === "Work") {setTime(time - 60)}
    } else {
      if (session < 60) {setSession(session + 1)}
      if (mode === "Work") {setTime(time + 60)}
    }
  }

// handle click for adjusting break length
  function handleClickBreak(e) {
    if (e.target.id === "break-decrement") {
      if (sbreak > 1) {setSbreak(sbreak - 1)}
      if (mode === "Break") {setTime(time - 60)}
    } else {
      if (sbreak < 60) {setSbreak(sbreak + 1)}
      if (mode === "Break") {setTime(time + 60)}
    }
  }

// handle click for reset button (resets all to default values)
  function handleReset() {
    setActive(false)
    setSession(25)
    setSbreak(5)
    setTime(1500)
    setMode("Work")
  }

// handle click for reset button
  function handleStartStop() {
    setActive(!active)
  }

// control display output


  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className="bg-success flex-fill">
        <Col className="m-auto">
          <CountdownClock time={time} mode={mode} handleReset={handleReset} handleStartStop={handleStartStop}/>
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
