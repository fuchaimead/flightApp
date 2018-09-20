import React from "react";
import { Container, Grid, Divider, Header, Form } from "semantic-ui-react";

class FlightForm extends React.Component {
  render() {
    return(
      <Container>
        <Header as="h1">New Flight</Header>
        <Form>
          <Form.Group>
            <Form.Input label="Date" placeholder="Date" />
            <Form.Input label="Name" placeholder="Name" />
          </Form.Group>
          <Header as="h4">Aircraft</Header>
          <Divider />
          <Form.Group >
            <Form.Input label="Make & Model" placeholder="Make & Model" />
            <Form.Input label="Identification" placeholder="Identification" />
          </Form.Group>
          <Header as="h4">Points of Departure & Arrival</Header>
          <Divider />
          <Form.Group>
            <Form.Input label="From" placeholder="From" />
            <Form.Input label="To" placeholder="To" />
          </Form.Group>
          <Header as="h4">Aircraft Category</Header>
          <Divider />
          <Form.Group>
            <Form.Input label="Airplane SEL" placeholder="Airplane SEL" />
            <Form.Input label="Airplane MEL" placeholder="Airplane MEL" />
          </Form.Group>
          <Header as="h4">Aircraft Category</Header>
          <Divider />
          <Form.Group>
            <Form.Input label="Dual Received " placeholder="Dual Received" />
            <Form.Input label="Pilot-in-Command" placeholder="Pilot-in-Command" />
          </Form.Group>
          <Header as="h4">Conditions of Flight</Header>
          <Divider />
          <Form.Group>
            <Form.Input label="Day " placeholder="Day" />
            <Form.Input label="Night" placeholder="Night" />
            <Form.Input label="Cross Country" placeholder="Cross Country" />
            <Form.Input label="Actual Instrument" placeholder="Actual Instrument" />
            <Form.Input label="Simulated Instrument" placeholder="Simulated Instrument" />
          </Form.Group>
          <Header as="h4">Flight Details</Header>
          <Divider />
          <Form.Group>
            <Form.Input label="Ground Trainer" placeholder="Ground Trainer" />
            <Form.Input label="No Instr. Appr" placeholder="No Instr. Appr" />
            <Form.Input label="No. Log Day" placeholder="No. Log Day" />
            <Form.Input label="No. Log Night" placeholder="No. Log Night" />
            <Form.Input label="Total Duration" placeholder="Total Duration" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FlightForm;