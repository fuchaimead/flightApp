import React from "react";
import { Button, Container, Grid, Divider, Header, Form } from "semantic-ui-react";
import "./form.css";

class FlightForm extends React.Component {
  handleCancel() {
    this.props.history.push("/");
  }

  render() {
    return(
      <Container className="flight-form">
        <Header as="h1" textAlign="center" className="main-header">New Flight</Header>
        <Form>
          <Grid>
            <Grid.Column>
              <Form.Group>
                <Form.Input label="Date" placeholder="Date" width={4} />
                <Form.Input label="Name" placeholder="Name" width={4}/>
              </Form.Group>
            </Grid.Column>
          </Grid>
          <Grid columns={2}>
            <Grid.Column>
              <Header as="h4" className="sub-header">Aircraft</Header>
              <Divider />
              <Form.Group widths="equal">
                <Form.Input label="Make & Model" placeholder="Make & Model" />
                <Form.Input label="Identification" placeholder="Identification" />
              </Form.Group>
            </Grid.Column>
            <Grid.Column> 
              <Header as="h4" className="sub-header">Points of Departure & Arrival</Header>
              <Divider />
              <Form.Group widths="equal">
                <Form.Input fluid label="From" placeholder="From" />
                <Form.Input fluid label="To" placeholder="To" />
              </Form.Group>
            </Grid.Column>
          </Grid>
          <Grid columns={2}>
            <Grid.Column>
              <Header as="h4" className="sub-header">Aircraft Category</Header>
              <Divider />
              <Form.Group widths="equal">
                <Form.Input fluid label="Airplane SEL" placeholder="Airplane SEL" />
                <Form.Input fluid label="Airplane MEL" placeholder="Airplane MEL" />
              </Form.Group>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" className="sub-header">Type of Piloting Time</Header>
              <Divider />
              <Form.Group widths="equal">
                <Form.Input fluid label="Dual Received" placeholder="Dual Received" />
                <Form.Input fluid label="Pilot-in-Command" placeholder="Pilot-in-Command" />
              </Form.Group>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column>
            <Header as="h4" className="sub-header">Conditions of Flight</Header>
            <Divider />
            <Form.Group>
              <Form.Input label="Day" placeholder="Day" width={4} />
              <Form.Input label="Night" placeholder="Night" width={4} />
              <Form.Input label="Cross Country" placeholder="Cross Country" width={4} />
            </Form.Group>
            <Form.Group>
              <Form.Input label="Actual Instrument" placeholder="Actual Instrument" width={4} />
              <Form.Input label="Simulated Instrument" placeholder="Simulated Instrument" width={4} />
            </Form.Group>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column>
              <Header as="h4" className="sub-header">Flight Details</Header>
              <Divider />
              <Form.Group>
                <Form.Input label="Ground Trainer" placeholder="Ground Trainer" width={4} />
                <Form.Input label="No Instr. Appr" placeholder="No Instr. Appr" width={4} />
                <Form.Input label="No. Log Day" placeholder="No. Log Day" width={4} />
                <Form.Input label="No. Log Night" placeholder="No. Log Night" width={4} />
              </Form.Group>
              <Form.Group>
                <Form.Input label="Total Duration" placeholder="Total Duration" width={4} />
              </Form.Group>
            </Grid.Column>
          </Grid>
          <Form.TextArea label="Remarks, procedures, maneuvers" width={8} />
          <Button primary>Save</Button>
          <Button secondary onClick={() => this.handleCancel()}>Cancel</Button>
        </Form>
      </Container>
    );
  }
}

export default FlightForm;