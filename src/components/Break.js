import React from 'react'
import { Button, Container, Row} from 'react-bootstrap'

// component for controlling break length
function Break(props) {
  return (
    <Container className={props.textStyle}>
      <Row className="justify-content-around">
        <h3 id="break-label" className="text-center font-weight-bold">Break Length</h3  >
      </Row>
      <Row className="justify-content-around">
          <Button id="break-decrement" className={props.btnStyle} onClick={props.handleClickBreak}>-</Button>
          <h2 id="break-length" className="font-weight-bold">{props.sbreak}</h2>
          <Button id="break-increment" className={props.btnStyle} onClick={props.handleClickBreak}>+</Button>
      </Row>
    </Container>
  )
}

export default Break
