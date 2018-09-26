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
      <Grid columns={4}>
        <Grid.Column>
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Aircraft Category</Table.HeaderCell>
                <Table.HeaderCell>Hours</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Airplane SEL
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Airplane MEL
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Type of Piloting Time</Table.HeaderCell>
                <Table.HeaderCell>Hours</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Dual Received
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>2.5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Pilot-in-Command
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Ground Trainer
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Conditions of Flight</Table.HeaderCell>
                <Table.HeaderCell>Hours</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Day
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>2.5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Night
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Cross-Country
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Actual Instrument
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Simulated Instrument
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Extra</Table.HeaderCell>
                <Table.HeaderCell>Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Instrument Approaches
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Day Landings
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h5'>
                    <Header.Content>
                      Night Landings
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
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