import axios from "axios";
import FlightTotals from "./totals";
import React from "react";
import Style from "./homepage.style";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Grid, Header } from "semantic-ui-react";

class Homepage extends React.Component {
  state = { flights: null }

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

  renderFlights() {
    return(
      this.state.flights.map(flight => {
        return(
          <div key={flight.id}>
            <Grid key={flight.id} columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <h4>
                    <Link to={`/${flight.id}/edit`}>Date {flight.date}</Link>
                  </h4>
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
    console.log(this.props)
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
