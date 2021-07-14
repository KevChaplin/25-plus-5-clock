import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CountdownClock from './components/CountdownClock'
import Break from './components/Break'
import Session from './components/Session'
import audio from './assets/Meditation-bell-sound-effect.mp3'

function App() {

  const [session, setSession] = useState(25);
  const [sbreak, setSbreak] = useState(5);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(5);
  const [working, setWorking] = useState(true);
  const [theme, setTheme] = useState("success")

// interval timer
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval)
    }
  }, [time, active])

  // switch modes between work and break at time 0
    if (time === 0) {
      document.getElementById("beep").play()
      function sessionSwitch() {
        if (working) {
          setTime(sbreak * 60)
          setTheme("primary")
        } else {
          setTime(session * 60)
          setTheme("success")
        }
        setWorking(!working)
      }
      setTimeout(sessionSwitch, 1000)
    }

// handle click for adjusting session length
  function handleClickSession(e) {
    if (e.target.id === "session-decrement") {
      if (session > 1) {
        setSession(session - 1)
        if (working && time > 60) {setTime(time - 60)}
      }
    } else {
      if (session < 60) {
        setSession(session + 1)
        if (working && time > 60) {setTime(time + 60)}
      }
    }
  }

// handle click for adjusting break length
  function handleClickBreak(e) {
    if (e.target.id === "break-decrement") {
      if (sbreak > 1) {
        setSbreak(sbreak - 1)
        if (!working  && time > 60) {setTime(time - 60)}}
    } else {
      if (sbreak < 60) {setSbreak(sbreak + 1)
        if (!working  && time > 60) {setTime(time + 60)}
      }
    }
  }

// handle click for reset button (resets all to default values, reloads audio)
  function handleReset() {
    document.getElementById("beep").load()
    setActive(false)
    setSession(25)
    setSbreak(5)
    setTime(1500)
    setWorking(true)
    setTheme("success")
  }

// handle click for reset button
  function handleStartStop() {
    setActive(!active)
  }

  var rowStyle = `bg-${theme} flex-fill`
  var btnStyle = `btn-${theme} btn-lg btn-outline-light font-weight-bold`
  var textStyle = `p-1 p-lg-5 text-${theme}`

  return (
    <Container fluid="lg" className="d-flex flex-column vh-100 justify-content-around justify-content-md-start">
      <Row className={rowStyle}>
        <Col className="m-auto">
          <CountdownClock time={time} working={working} handleReset={handleReset} handleStartStop={handleStartStop} btnStyle={btnStyle}/>
        </Col>
      </Row>
      <Row className="bg-white flex-fill">
        <Col sm>
          <Session session={session} handleClickSession={handleClickSession} btnStyle={btnStyle} textStyle={textStyle}/>
        </Col>
        <Col sm>
          <Break sbreak={sbreak} handleClickBreak={handleClickBreak} btnStyle={btnStyle} textStyle={textStyle}/>
        </Col>
      </Row>
      <audio id="beep" preload="auto" src={audio}></audio>
    </Container>
  )
}

export default App
