import React from "react";
import { Button, Container, Grid, Divider, Header, Form } from "semantic-ui-react";
import Style from "./form.style";
import axios from "axios";

class FlightForm extends React.Component {
  state = { flight: {actualInstrument: "", arrival: "", crossCountry: "", date: "", day: "", dayLandings: "", departure: "", dual: "", ground: "", identification: "", 
    instrumentApproaches: "", name: "", night: "", nightLandings: "", mel: "", model: "", pic: "", remarks: "", sel: "", simulatedInstrument: "", total: ""}}

  componentDidMount() {
    // todo find single flight 
  }
  handleCancel() {
    this.props.history.push("/");
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ flight: {...this.state.flight, [id]: value } })
  }

  handleSubmit() {
    axios.post("/api/flights")
        .then(res => {
          console.log(res)
        })
        .catch( err => {
          console.log(err);
      })
  }

  render() {
    const { actualInstrument, arrival, crossCountry, date, day, dayLandings, departure, dual, ground, identification, 
      instrumentApproaches, name, night, nightLandings, mel, model, pic, remarks, sel, simulatedInstrument, total } = this.state.flight; 

    return(
      <Style>
        <Container className="flight-form">
          <Header as="h1" textAlign="center" className="main-header">New Flight</Header>
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Column>
                <Form.Group>
                  <Form.Input label="Date" placeholder="Date" width={4} id="date" value={date} onChange={this.handleChange}/>
                  <Form.Input label="Name" placeholder="Name" width={4} id="name" value={name} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid columns={2}>
              <Grid.Column>
                <Header as="h4" className="sub-header">Aircraft</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input label="Make & Model" placeholder="Make & Model" id="model" value={model} onChange={this.handleChange}/>
                  <Form.Input label="Identification" placeholder="Identification" id="identification" value={identification} onChange={this.handleChange} />
                </Form.Group>
              </Grid.Column>
              <Grid.Column> 
                <Header as="h4" className="sub-header">Points of Departure & Arrival</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input fluid label="From" placeholder="From" id="departure" value={departure} onChange={this.handleChange}/>
                  <Form.Input fluid label="To" placeholder="To" id="arrival" value={arrival} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid columns={2}>
              <Grid.Column>
                <Header as="h4" className="sub-header">Aircraft Category</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input fluid label="Airplane SEL" placeholder="Airplane SEL" id="sel" value={sel} onChange={this.handleChange}/>
                  <Form.Input fluid label="Airplane MEL" placeholder="Airplane MEL" id="mel" value={mel} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" className="sub-header">Type of Piloting Time</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input fluid label="Dual Received" placeholder="Dual Received" id="dual" value={dual} onChange={this.handleChange}/>
                  <Form.Input fluid label="Pilot-in-Command" placeholder="Pilot-in-Command" id="pic" value={pic} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
              <Header as="h4" className="sub-header">Conditions of Flight</Header>
              <Divider />
              <Form.Group>
                <Form.Input label="Day" placeholder="Day" width={4} id="day" value={day} onChange={this.handleChange}/>
                <Form.Input label="Night" placeholder="Night" width={4} id="night" value={night} onChange={this.handleChange}/>
                <Form.Input label="Cross Country" placeholder="Cross Country" width={4} id="crossCountry" value={crossCountry} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Input label="Actual Instrument" placeholder="Actual Instrument" width={4} id="actualInstrument" value={actualInstrument} onChange={this.handleChange}/>
                <Form.Input label="Simulated Instrument" placeholder="Simulated Instrument" width={4} id="simulatedInstrument" value={simulatedInstrument} onChange={this.handleChange}/>
              </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Header as="h4" className="sub-header">Flight Details</Header>
                <Divider />
                <Form.Group>
                  <Form.Input label="Ground Trainer" placeholder="Ground Trainer" width={4} id="ground" value={ground} onChange={this.handleChange}/>
                  <Form.Input label="No Instr. Appr" placeholder="No Instr. Appr" width={4} id="instrumentApproaches" value={instrumentApproaches} onChange={this.handleChange}/>
                  <Form.Input label="No. Log Day" placeholder="No. Landings Day" width={4} id="dayLandings" value={dayLandings} onChange={this.handleChange}/>
                  <Form.Input label="No. Log Night" placeholder="No. Landings Night" width={4} id="nightLandings" value={nightLandings} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Input label="Total Duration" placeholder="Total Duration" width={4} id="total" value={total} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Form.TextArea label="Remarks, procedures, maneuvers" width={8} id="remarks" value={remarks} onChange={this.handleChange}/>
            <Grid columns={2}>
              <Grid.Column></Grid.Column>
              <Grid.Column className="align-left">
                <Button color="yellow" onClick={() => this.handleCancel()}>Cancel</Button>
                <Button color="green" type="submit">Save</Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Container>
      </Style>
    );
  }
}

export default FlightForm;