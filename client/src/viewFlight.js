import FlightDetails from "./flightDetails";
import React from "react";
import Moment from "moment";
import { Modal } from "semantic-ui-react";

class ViewFlight extends React.Component {

  toggleVisible () {
    this.setState({ isVisible: !this.state.isVisible });
  }
  
  viewFlight() {
    return(
      <FlightDetails {...this.props}/>
    );
  }

  render () {
    if(this.props.flight === undefined) { return (null); }
    const date = Moment(this.props.flight.date).format("MM/DD/YYYY")

    return (
      <span>
        <Modal trigger={<span>{date}</span>}>
          <Modal.Content>
            {this.viewFlight()}
          </Modal.Content>
        </Modal>
      </span>
    );
  }
}

export default ViewFlight;