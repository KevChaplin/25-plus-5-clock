import React from 'react'
import { Button, Container, Row} from 'react-bootstrap'

// component for controlling session length
function Session(props) {
  return (
    <Container className={props.textStyle}>
      <Row className="justify-content-around">
        <h3 id="session-label" className="text-center font-weight-bold">Session Length</h3  >
      </Row>
      <Row className="justify-content-around">
          <Button id="session-decrement" className={props.btnStyle} onClick={props.handleClickSession}>-</Button>
          <h2 id="session-length" className="font-weight-bold">{props.session}</h2>
          <Button id="session-increment"className={props.btnStyle} onClick={props.handleClickSession}>+</Button>
      </Row>
    </Container>
  )
}

export default Session
