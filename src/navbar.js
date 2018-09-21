import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./App.css";

class NavBar extends React.Component {
  handleClick() {
  }

  render() {
    return(
      <div className="nav">
        <Grid>
          <NavLink to="/"> 
            <Icon name="paper plane" size="big" />
            <Header as="h3" className="flight-name">Flight Log</Header>
          </NavLink>
        </Grid>
      </div>
    );
  }
}

export default NavBar;