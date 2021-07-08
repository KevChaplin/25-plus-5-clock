import React from 'react'
import { Button, Container, Row} from 'react-bootstrap'

function SetLength() {
  return (
    <Container className="p-1 p-lg-5 text-success">
      <Row className="justify-content-around">
        <h3 className="text-center font-weight-bold">Break Length</h3  >
      </Row>
      <Row className="justify-content-around">
          <Button className="btn-success btn-lg font-weight-bold">-</Button>
          <h2 className="font-weight-bold">25</h2>
          <Button className="btn-success btn-lg font-weight-bold">+</Button>
      </Row>
    </Container>
  )
}

export default SetLength
