import React from 'react';
import {Container, Row, Button } from 'react-bootstrap'

// compoonent for controlling countdown timer, including work status; timer, and play/pause and reset buttons
function CountdownClock(props) {

// format number with leading zeros if single digit number
  const formatNumber = (num) => (num < 10) ? `0${num}` : `${num}`;

//set minutes and seconds
  var minutes = formatNumber(Math.floor(props.time/60));
  var seconds = formatNumber(props.time%60);

// set display time
  var displayTime = `${minutes}:${seconds}`

  return (
    <Container fluid className="p-1 p-lg-5 text-center text-white d-flex flex-column justify-content-around">
      <Row className="m-auto">
        <h3 id="timer-label" className="display-3 text-center">{props.working ? "Work" : "Break"}</h3>
      </Row>
      <Row className="m-auto">
        <h1 id="time-left" className="display-1 font-weight-bold">{displayTime}</h1>
      </Row>
      <Row className="justify-content-around">
        <Button id="start_stop" className={props.btnStyle} onClick={props.handleStartStop}>play/pause</Button>
        <Button id="reset" className={props.btnStyle} onClick={props.handleReset}>reset</Button>
      </Row>
    </Container>
  )
}

export default CountdownClock;
