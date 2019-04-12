import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import Home from './Home'
import Question from './Question'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="container">
        {this.props.loading ? null : <NewQuestion />}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
