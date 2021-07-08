import React from 'react'
import { Button, Container, Row} from 'react-bootstrap'

function Break(props) {
  return (
    <Container className="p-1 p-lg-5 text-success">
      <Row className="justify-content-around">
        <h3 id="break-label" className="text-center font-weight-bold">Break Length</h3  >
      </Row>
      <Row className="justify-content-around">
          <Button id="break-decrement" className="btn-success btn-lg font-weight-bold" onClick={props.handleClickBreak}>-</Button>
          <h2 id="break-length" className="font-weight-bold">{props.sbreak}</h2>
          <Button id="break-increment" className="btn-success btn-lg font-weight-bold" onClick={props.handleClickBreak}>+</Button>
      </Row>
    </Container>
  )
}

export default Break
