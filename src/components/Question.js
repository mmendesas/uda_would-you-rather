import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound'
import AnswerForm from './AnswerForm';
import AnswerResults from './AnswerResults';

class Question extends Component {
    render() {
        const { user, question, userAnswer } = this.props;
        const { avatarURL, name } = user;

        if (!question) {
            return <NotFound />
        }

        const { optionOne, optionTwo } = question;

        const voteOptionOne = userAnswer === optionOne.text
        const voteOptionTwo = userAnswer === optionTwo.text
        const hasVote = voteOptionOne || voteOptionTwo

        return (
            <div className="user-info">
                <div className="answer-image">
                    <div>Who asks?</div>
                    <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                    <div>{name}</div>
                </div>
                <div className="answer-info">
                    {!hasVote && (
                        <AnswerForm
                            textOne={optionOne.text}
                            textTwo={optionTwo.text}
                            id={question.id} />
                    )}
                    {hasVote && (
                        <AnswerResults
                            optionOne={optionOne}
                            optionTwo={optionTwo}
                            userAnswer={userAnswer}
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
    const { id } = props.match.params;
    const question = questions[id];
    let userAnswer = '';
    let user = '';

    if (question) {
        const { optionOne, optionTwo } = question;
        const answerOne = optionOne.votes.includes(authedUser) ? optionOne.text : null;
        const answerTwo = optionTwo.votes.includes(authedUser) ? optionTwo.text : null;
        user = users[questions[id].author]
        userAnswer = answerOne || answerTwo;
    }

    return {
        question,
        user,
        userAnswer
    }
}

export default connect(mapStateToProps)(Question);