import React, { Component } from "react";
import { connect } from "react-redux";

const UserScore = ({ user }) => {
  const { id, name, avatarURL, answers, questions } = user;

  const numAnswers = Object.keys(answers).length;
  const numQuestions = questions.length;

  if (!user) {
    return <p>This user doesn't exist</p>;
  }

  return (
    <div className="user-info">
      <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
      <div className="divider" />
      <div>
        <h3 className="center">{name}</h3>
        <table>
          <tbody>
            <tr>
              <td>Answered Questions</td>
              <td>{numAnswers}</td>
            </tr>
            <tr>
              <td>Created Questions</td>
              <td>{numQuestions}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="divider" />
      <div className="center">
        <div className="scoreTotal">{numAnswers + numQuestions}</div>
        <div>score</div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }, { id }) => ({
  user: users[id] || null
});

export default connect(mapStateToProps)(UserScore);
