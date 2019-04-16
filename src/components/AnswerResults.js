import React from 'react'
import { Progress } from 'semantic-ui-react'

const AnswerOption = ({ userHasVoted, option, votes, allVotes, color }) => (
    <section className={`progress-info ${userHasVoted ? 'userVote' : ''}`}>
        {userHasVoted && <div id="circle"></div>}
        <h4>{option.text}</h4>
        <Progress percent={votes} progress color={color} className="progress" />
        <p>{option.votes.length} of {allVotes} votes</p>
    </section>
)

const AnswerResults = ({ optionOne, optionTwo, userAnswer }) => {

    const allVotes = [optionOne.votes, optionTwo.votes].length;
    const votesOne = (optionOne.votes.length * 100) / allVotes;
    const votesTwo = (optionTwo.votes.length * 100) / allVotes;

    const firstChoice = userAnswer === optionOne.text
    const secondChoice = userAnswer === optionTwo.text

    return (
        <section>
            <h3 className="center">Results</h3>
            <AnswerOption
                userHasVoted={firstChoice}
                option={optionOne}
                votes={votesOne}
                allVotes={allVotes}
                color="teal"
            />
            <AnswerOption
                userHasVoted={secondChoice}
                option={optionTwo}
                votes={votesTwo}
                allVotes={allVotes}
                color="blue"
            />
        </section>
    )
}

export default AnswerResults