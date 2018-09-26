import React from "react";
import { Segment } from "semantic-ui-react";

class ViewFlight extends React.Component {
  state = { isVisible: false }
  
  toggleVisible () {
    this.setState({ isVisible: !this.state.isVisible });
  }
  
  viewFlight() {
    const {date} = this.props.flight;

    if(!this.state.isVisible) { return (null); }
    
    return(
      <Segment>
        testing
      </Segment>
    );
  }

  render () {
    console.log(this.state)
    if(this.props.flight === undefined) { return (null); }

    return (
      <div>
        <a onClick={() => this.toggleVisible()}>
          {this.props.flight.date}
        </a>
        {this.viewFlight()}
      </div>
    );
  }
}

export default ViewFlight;