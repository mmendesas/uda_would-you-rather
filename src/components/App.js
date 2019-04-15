import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { handleInitialData } from "../actions/shared"

import LoadingBar from 'react-redux-loading';
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import Home from './Home'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import NoMatch from './NoMatch'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className="container">
            {this.props.loading ? null :
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/login" component={Login} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/question/:id" component={Question} />
                <Route component={NoMatch} />
              </Switch>
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
