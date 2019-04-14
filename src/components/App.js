import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading';
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
      <Fragment>
        <LoadingBar />
        <div className="container">
          {this.props.loading ? null : <NewQuestion />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
