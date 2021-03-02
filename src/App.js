import {Alert, Button, Jumbotron, Form, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid="md">

        <Jumbotron>
          <h1>Did you walk the dog yet?</h1>
          <p>
            A app to track your all the walks with you and your dog!
          </p>
      </Jumbotron>

      <Alert variant="success">
        <Alert.Heading>Walk details</Alert.Heading>
      </Alert>

        <Form>
          <Form.Group>
            <Form.Label>How long of a walk in minutes?</Form.Label>
            <Row>
              <Col xs={1}>
                <Form.Control as="input" type="number" id="walkminutes"/>
              </Col>
            </Row>
            <Form.Check type="checkbox" label="Pee?" id="peecheck"/>
            <Form.Check type="checkbox" label="Poop?" id="poopcheck"/>
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
