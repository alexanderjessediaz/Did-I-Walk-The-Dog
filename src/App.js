import {Jumbotron, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
    </Jumbotron>
        <Form>
        <Form.Group>
          <Form.Label>Form</Form.Label>
          <Form.Control as="input" type="number"/>
        </Form.Group>
      </Form>
    </div>
    );
}

export default App;
