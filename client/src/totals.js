import FlightDetails from "./flightDetails";
import React from "react";
import { Grid, Header, Label, Segment, Table } from "semantic-ui-react";

class FlightTotals extends React.Component {
  state = { showDetails: false }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  renderDetails() {
    if(!this.state.showDetails) { return(null); }

    return(
      <FlightDetails />
    );
  }

  render() {
    const details = this.state.showDetails ? "Hide Details" : "Show Details";

    return(
      <Segment>
        <Header as='h3' className="flight-totals">Total Duration of Flight</Header>
        <Label color='blue' size='large'>200 hours</Label>
        <h4>
          <a onClick={() => this.toggleDetails()}>
            {details}
          </a>
        </h4>
        {this.renderDetails()}
      </Segment>
    );
  }
}

export default FlightTotals