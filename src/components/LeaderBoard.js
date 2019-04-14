import React, { Component } from "react";
import { connect } from "react-redux";

import UserScore from "./UserScore";
class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <ul className="leaderboard__list">
          {this.props.userIds.map(id => (
            <li key={id}>
              <UserScore id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  userIds: Object.keys(users).sort((a, b) => {
    const qa_a =
      users[a].questions.length + Object.keys(users[a].answers).length;
    const qa_b =
      users[b].questions.length + Object.keys(users[b].answers).length;

    return qa_b - qa_a;
  })
});

export default connect(mapStateToProps)(LeaderBoard);
