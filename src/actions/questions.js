import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

// action creators
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function answerQuestion({ answer, questionId, authedUser }) {
  return {
    type: ANSWER_QUESTION,
    payload: {
      answer,
      questionId,
      authedUser
    }
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

// async action creators
export function handleAddQuestion(textOne, textTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: textOne,
      optionTwoText: textTwo
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAnwserQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => dispatch(answerQuestion({ answer, questionId: qid, authedUser })))
      .then(() => dispatch(hideLoading()))
  }
}