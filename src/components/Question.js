import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'semantic-ui-react'

class Question extends Component {

    render() {
        const { user, question, userAnswer } = this.props;
        const { avatarURL, name } = user;
        const { optionOne, optionTwo } = question;

        const allVotes = [optionOne.votes, optionTwo.votes].length;
        const votesOne = (optionOne.votes.length * 100) / allVotes;
        const votesTwo = (optionTwo.votes.length * 100) / allVotes;

        return (
            <div className="user-info">
                <div className="answer-image">
                    <div>Who asks?</div>
                    <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                    <div>{name}</div>
                </div>
                <div className="answer-info">
                    <h3 className="center">Results</h3>
                    <section className={`progress-info ${userAnswer === optionOne.text ? 'active' : ''}`}>
                        <h4>{optionOne.text}</h4>
                        <Progress percent={votesOne} progress color='green' className="progress" />
                        <p>{optionOne.votes.length} of {allVotes} votes</p>
                    </section>

                    <section className={`progress-info ${userAnswer === optionTwo.text ? 'active' : ''}`}>
                        <h4>{optionTwo.text}</h4>
                        <Progress percent={votesTwo} progress color='blue' className="progress" />
                        <p>{optionTwo.votes.length} of {allVotes} votes</p>
                    </section>
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
        question,
        user: users[questions[id].author],
        userAnswer
    }
}

export default connect(mapStateToProps)(Question);