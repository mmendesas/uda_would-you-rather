import React, { Component } from "react";
import { connect } from "react-redux";

class Answer extends Component {
  render() {
    const { user, optionOne, optionTwo, userAnswer } = this.props;
    const { avatarURL, name } = user;

    return (
      <div className="user-info">
        <div className="answer-image">
          <div>Who asks?</div>
          <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          <div>{name}</div>
        </div>
        <div className="divider" />
        <div className="answer-info">
          <h3 className="center">Would you rather...</h3>
          <p style={{ color: "teal" }}>... {optionOne.substr(0,5)}...</p>
          <button className="btn" >View Poll</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  const { optionOne, optionTwo } = question;
  const answerOne = optionOne.votes.includes(authedUser) ? optionOne.text : null;
  const answerTwo = optionTwo.votes.includes(authedUser) ? optionTwo.text : null;
  const userAnswer = answerOne || answerTwo;

  return {
    optionOne: question.optionOne.text,
    optionTwo: question.optionOne.text,
    user: users[questions[id].author],
    userAnswer
  };
};

export default connect(mapStateToProps)(Answer);
