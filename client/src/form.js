import React from "react";
import { Button, Container, Divider, Grid, Header, Form } from "semantic-ui-react";
import Style from "./form.style";
import axios from "axios";

class FlightForm extends React.Component {
  state = { flight: 
            { actual_instrument_hours: undefined, 
              airplane_mel: undefined, 
              airplane_sel: undefined, 
              arrival: "", 
              comments: "", 
              cross_country_hours: undefined, 
              date: "", 
              day_hours: undefined, 
              departure: "", 
              dual_received: undefined, 
              ground_trainer: undefined, 
              identification: "", 
              num_instrument_approaches: undefined, 
              night_hours: undefined, 
              num_landings_day: undefined, 
              num_landings_night: undefined, 
              maneuvers: "",
              model: "", 
              pic_hours: undefined, 
              simulated_instrument: undefined,
              solo_flight: undefined,
              total_duration: undefined,
            },
            editing: false
          }

  componentDidMount() {
    axios.get(`/api/flights/${this.props.match.params.id}`) 
      .then(res => {
        console.log("results", res)
        this.setState({ flight: res.data })
      })
      .catch( err => {
        console.log(err);
    })
  }


  handleCancel() {
    this.props.history.push("/");
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ flight: {...this.state.flight, [id]: value } });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = this.state.flight
    axios.post("/api/flights", data)
      .then(res => {
        this.props.history.push("/")
      })
      .catch( err => {
        console.log(err);
    })
  }

  renderHeader() {
    return(
      this.state.editing ? "Updating Flight" : "New Flight"
    );
  }

  render() {
    const { actual_instrument_hours, arrival, cross_country_hours, comments, date, day_hours, num_landings_day, departure, dual_received, ground_trainer, identification, 
      num_instrument_approaches, night_hours, num_landings_night, airplane_mel, model, pic_hours, maneuvers, airplane_sel, simulated_instrument, solo_flight, total_duration } = this.state.flight; 

    return(
      <Style>
        <Container className="flight-form">
          <Header as="h1" textAlign="center" className="main-header">{this.renderHeader()}</Header>
          <Divider />
          <br />
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Column>
                <Form.Group>
                  <Form.Input label="Date" placeholder="Date" width={4} id="date" value={date} onChange={this.handleChange} required type="date"/>
                  <Form.Input label="Description" placeholder="Description" width={4} id="comments" value={comments} onChange={this.handleChange}/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid columns={2}>
              <Grid.Column>
                <Header as="h4" className="sub-header">Aircraft</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input label="Make & Model" placeholder="Make & Model" id="model" value={model} onChange={this.handleChange} required/>
                  <Form.Input label="Identification" placeholder="Identification" id="identification" value={identification} onChange={this.handleChange} required/>
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
                  <Form.Input fluid label="Airplane SEL" placeholder="Airplane SEL" id="sel" value={airplane_sel} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input fluid label="Airplane MEL" placeholder="Airplane MEL" id="mel" value={airplane_mel} onChange={this.handleChange} type="number" min="0"/>
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" className="sub-header">Type of Piloting Time</Header>
                <Divider />
                <Form.Group widths="equal">
                  <Form.Input fluid label="Dual Received" placeholder="Dual Received" id="dual" value={dual_received} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input fluid label="Pilot-in-Command" placeholder="Pilot-in-Command" id="pic" value={pic_hours} onChange={this.handleChange} type="number" min="0"/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
              <Header as="h4" className="sub-header">Conditions of Flight</Header>
              <Divider />
              <Form.Group>
                <Form.Input label="Day" placeholder="Day" width={4} id="day" value={day_hours} onChange={this.handleChange} type="number" min="0"/>
                <Form.Input label="Night" placeholder="Night" width={4} id="night" value={night_hours} onChange={this.handleChange} type="number" min="0"/>
                <Form.Input label="Cross Country" placeholder="Cross Country" width={4} id="crossCountry" value={cross_country_hours} onChange={this.handleChange} type="number" min="0"/>
              </Form.Group>
              <Form.Group>
                <Form.Input label="Actual Instrument" placeholder="Actual Instrument" width={4} id="actualInstrument" value={actual_instrument_hours} onChange={this.handleChange} type="number" min="0"/>
                <Form.Input label="Simulated Instrument" placeholder="Simulated Instrument" width={4} id="simulatedInstrument" value={simulated_instrument} onChange={this.handleChange} type="number" min="0"/>
              </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Header as="h4" className="sub-header">Flight Details</Header>
                <Divider />
                <Form.Group>
                  <Form.Input label="Ground Trainer" placeholder="Ground Trainer" width={4} id="ground" value={ground_trainer} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input label="No Instr. Approaches" placeholder="No Instr. Approaches" width={4} id="instrumentApproaches" value={num_instrument_approaches} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input label="No. Landings Day" placeholder="No. Landings Day" width={4} id="dayLandings" value={num_landings_day} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input label="No. Landings Night" placeholder="No. Landings Night" width={4} id="nightLandings" value={num_landings_night} onChange={this.handleChange} type="number" min="0"/>
                </Form.Group>
                <Form.Group>
                  <Form.Input label="Solo Flight" placeholder="Solo Flight" width={4} id="soloFlight" value={solo_flight} onChange={this.handleChange} type="number" min="0"/>
                  <Form.Input label="Total Duration" placeholder="Total Duration" width={4} id="total" value={total_duration} onChange={this.handleChange} type="number" min="0"/>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Form.TextArea label="Procedures and maneuvers" width={8} id="maneuvers" value={maneuvers} onChange={this.handleChange}/>
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