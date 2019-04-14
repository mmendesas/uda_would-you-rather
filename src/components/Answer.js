import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Answer extends Component {
  render() {
    const { user, optionOne, id } = this.props;
    const { avatarURL, name } = user;

    return (
      <Link to={`/question/${id}`} className="user-info">
        <div className="answer-image">
          <div>Who asks?</div>
          <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          <div>{name}</div>
        </div>
        <div className="divider" />
        <div className="answer-info">
          <h3 className="center">Would you rather...</h3>
          <p style={{ color: "teal" }}>... {optionOne.substr(0, 5)}...</p>
          <button className="btn" >View Poll</button>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  return {
    optionOne: question.optionOne.text,
    user: users[questions[id].author],
    id
  };
};

export default connect(mapStateToProps)(Answer);
