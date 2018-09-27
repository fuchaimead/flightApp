import FlightDetails from "./flightDetails";
import React from "react";
import { Modal } from "semantic-ui-react";

class ViewFlight extends React.Component {

  toggleVisible () {
    this.setState({ isVisible: !this.state.isVisible });
  }
  
  viewFlight() {
    const {date} = this.props.flight    
    return(
      <FlightDetails />
    );
  }

  render () {
    if(this.props.flight === undefined) { return (null); }

    return (
      <span>
        <Modal trigger={<span>{this.props.flight.date}</span>}>
          <Modal.Content>
            {this.viewFlight()}
          </Modal.Content>
        </Modal>
      </span>
    );
  }
}

export default ViewFlight;