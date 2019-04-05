import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Leader Board!</h3>
        <ul className="leaderboard-list">
          {this.props.userIds.map(id => (
            <li key={id}>
              <div>UserId: {id}</div>
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
