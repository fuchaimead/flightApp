import React, { Component } from "react";
import { Button, Container, Grid, Header } from "semantic-ui-react";
import "./App.css";

class Homepage extends Component {

  handleAddFlight() {
    this.props.history.push("/new");
  }

  render() {
    return (
      <div className="header">
        <Container>
          <Grid >
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" textAlign="center">Flight App</Header>
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
        </Container>
      </div>
    );
  }
}

export default Homepage;
