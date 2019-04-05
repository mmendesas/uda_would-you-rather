import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="container">
        <LeaderBoard />
      </div>
    );
  }
}

export default connect()(App);
