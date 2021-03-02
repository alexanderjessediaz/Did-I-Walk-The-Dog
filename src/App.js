import {Button, Jumbotron, Form, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

        <Jumbotron>
          <h1>Did you walk the dog yet?</h1>
          <p>
            A app to track your all the walks with you and your dog!
          </p>
      </Jumbotron>

      <Container fluid="md">

        <Form>
          <Form.Group>
            <Row>
              <Form.Label>What day did you walk?</Form.Label>
              <Col xs={2}>
                <Form.Control as="input" type="date" id="walkminutes"/>
              </Col>
            </Row>
            <Row>
              <Form.Label>What time did you walk?</Form.Label>
              <Col xs={2}>
              <Form.Control as="input" type="time" id="walkminutes"/>
              </Col>
            </Row>
            <Row>
            <Form.Label>How long of a walk in minutes?</Form.Label>
              <Col xs={1}>
                <Form.Control as="input" type="number" id="walkminutes"/>
              </Col>
            </Row>
            <Row>
              <Form.Check type="checkbox" label="Pee?" id="peecheck"/>
            </Row>
            <Row>
              <Form.Check type="checkbox" label="Poop?" id="poopcheck"/>
            </Row>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    );
}

export default App;
