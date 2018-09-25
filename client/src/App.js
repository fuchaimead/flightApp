import Form from "./form";
import Homepage from "./homepage";
import NavBar from "./navbar";
import NoMatch from "./noMatch";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/new" component={ Form } />
          <Route exact path="/:id/edit" component={ Form } />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    );
  }
}

export default App;
