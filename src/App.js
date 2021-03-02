import { Component } from 'react';
import {Button, Jumbotron, Form, Container, Row, Col } from 'react-bootstrap'

class App extends Component {

  state = {
    dogs: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/dogs")
      .then(response => response.json())
      .then(console.log)
  }
  render (){
  return (
    <div className="App">

        <Jumbotron>
          <h1>Did you walk the dog yet?</h1>
          <p>
            A app to track your all the walks with you and your dog!
          </p>
          <br></br>
          <Form>
            <Row>
            <Form.Label>What's the dog's name?</Form.Label>
              <Col xs={2}>
              <Form.Control as="input" type="text" id="dogname"/>
              </Col>
          <Button variant="secondary" type="submit" id="create-dog-BTN">
            Create Dog
          </Button>
            </Row>  
          </Form>
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
              <Form.Label>How many times?</Form.Label>
              <Col xs={1}>
                <Form.Control as="input" type="number" id="peecount"/>
              </Col>
            </Row>
            <Row>
              <Form.Check type="checkbox" label="Poop?" id="poopcheck"/>
            </Row>
            <Row>
            <Form.Label>How many times?</Form.Label>
              <Col xs={1}>
                <Form.Control as="input" type="number" id="peecount"/>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="secondary" type="submit" id="submitBTN">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    )};
}

export default App;
