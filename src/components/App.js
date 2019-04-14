import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from "../actions/shared"

import LoadingBar from 'react-redux-loading';
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import Home from './Home'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Nav from './Nav'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />          
        <LoadingBar />
          <LoadingBar />
          <Nav />          
          <div className="container">
            {this.props.loading ? null :
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={NewQuestion} />            
                <Route path="/login" component={Login} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/question:id" component={Question} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
