import Form from "./form";
import Homepage from "./homepage";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/new" component={ Form } />
        </Switch>
      </div>
    );
  }
}

export default App;
