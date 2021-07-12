import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import Break from './components/Break'
import Session from './components/Session'
import alarm from './assets/Meditation-bell-sound-effect.mp3'

function App() {

  const [session, setSession] = useState(25);
  const [sbreak, setSbreak] = useState(5);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(1500);
  const [working, setWorking] = useState(true);

//interval timer
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval)
    }
  }, [time, active])

//switch modes between work and break at time = 0
// ******** sounds resets on re-render ******* FIX
  if (time === 0) {
    document.getElementById("beep").play()
    function sessionSwitch() {
      if (working) {setTime(sbreak * 60)}
      else {setTime(session * 60)}
      setWorking(!working)
    }
    setTimeout(sessionSwitch, 1000)
  }

// handle click for adjusting session length
  function handleClickSession(e) {
    if (e.target.id === "session-decrement") {
      if (session > 1) {
        setSession(session - 1)
        if (working) {setTime(time - 60)}
      }
    } else {
      if (session < 60) {
        setSession(session + 1)
        if (working) {setTime(time + 60)}
      }
    }
  }

// handle click for adjusting break length
  function handleClickBreak(e) {
    if (e.target.id === "break-decrement") {
      if (sbreak > 1) {
        setSbreak(sbreak - 1)
        if (!working) {setTime(time - 60)}}
    } else {
      if (sbreak < 60) {setSbreak(sbreak + 1)
        if (!working) {setTime(time + 60)}
      }
    }
  }

// handle click for reset button (resets all to default values)
  function handleReset() {
    setActive(false)
    setSession(25)
    setSbreak(5)
    setTime(1500)
    setWorking(true)
  }

// handle click for reset button
  function handleStartStop() {
    setActive(!active)
  }

  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className="bg-success flex-fill">
        <Col className="m-auto">
          <CountdownClock time={time} working={working} handleReset={handleReset} handleStartStop={handleStartStop}/>
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
      <audio id="beep" preload="auto" src={alarm}></audio>
    </Container>
  )
}

export default App
