import React from 'react'
import { Button, Container, Row} from 'react-bootstrap'

function Session(props) {
  return (
    <Container className="p-1 p-lg-5 text-success">
      <Row className="justify-content-around">
        <h3 id="session-label" className="text-center font-weight-bold">Session Length</h3  >
      </Row>
      <Row className="justify-content-around">
          <Button id="session-decrement" className="btn-success btn-lg font-weight-bold">-</Button>
          <h2 id="session-length" className="font-weight-bold">25</h2>
          <Button id="session-increment"className="btn-success btn-lg font-weight-bold">+</Button>
      </Row>
    </Container>
  )
}

export default Session
