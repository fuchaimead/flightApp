import axios from "axios";
import FlightTotals from "./totals";
import React from "react";
import Style from "./homepage.style";
import ViewFlight from "./viewFlight";
import { Button, Container, Divider, Grid, Header } from "semantic-ui-react";

class Homepage extends React.Component {
  state = { flights: [], viewFlight: false }

  componentDidMount() {
    axios.get("/api/flights") 
      .then(res => {
        this.setState({ flights: res.data });
      })
      .catch( err => {
        console.log(err);
    });
  }

  handleDeleteFlight(id) {
    this.setState({ flights: this.state.flights.filter((flight) => flight.id !== id ) });
  }

  handleAddFlight() {
    this.props.history.push("/new");
  }

  renderFlights() {
    return(
      this.state.flights.map(flight => {
        return(
          <div key={flight.id}>
            <Grid key={flight.id} columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <span>
                    <ViewFlight flight={flight} {...this.props} deleteFlight={(id) => this.handleDeleteFlight(id)}/>
                  </span>
                </Grid.Column>
                <Grid.Column>
                  <strong>
                    <p>Description</p>
                  </strong>
                  <i>{flight.comments}</i>
                </Grid.Column>
                <Grid.Column>
                  <strong>
                    <p>Aircraft Make & Model</p>
                  </strong>
                  <i>{flight.model}</i>
                </Grid.Column>
                <Grid.Column>
                  <strong>
                    <p>Aircraft Identification</p>
                  </strong>
                  <i>{flight.identification}</i>
                </Grid.Column>
                <Grid.Column>
                <strong>
                  <p>Total Hours</p>
                </strong>
                <i>{flight.total_duration}</i>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
          </div>
        );
      })
    )
  }

  render() {
    if(this.state.flights === null) { return(null); }

    return (
      <Style>
        <Container>
          <Header as="h1" textAlign="center">(User name) Flight Log</Header>
          <FlightTotals flights={this.state.flights}/>
          <Grid>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Button onClick={() => this.handleAddFlight()}>Add Flight</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {this.renderFlights()}
        </Container>
      </Style>
    );
  }
}

export default Homepage;
