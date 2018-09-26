import axios from "axios";
import FlightTotals from "./totals";
import React from "react";
import Style from "./homepage.style";
import ViewFlight from "./viewFlight";
import { Button, Container, Divider, Grid, Header, Icon, Modal } from "semantic-ui-react";

class Homepage extends React.Component {
  state = { flights: null, viewFlight: false, flightId: false}

  componentDidMount() {
    axios.get("/api/flights") 
      .then(res => {
        this.setState({ flights: res.data })
      })
      .catch( err => {
        console.log(err);
    })
  }

  handleAddFlight() {
    this.props.history.push("/new");
  }

  handleEditFlight(id) {
    this.props.history.push(`/${id}/edit`)
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
                    <Icon name="edit" link onClick={() => this.handleEditFlight(flight.id)}/>
                    <h4>
                      <ViewFlight flight={flight}/>
                    </h4>
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
                <i>{flight.total}</i>
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
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" textAlign="center">Your Flights</Header>
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
          <FlightTotals/>
        </Container>
      </Style>
    );
  }
}

export default Homepage;
