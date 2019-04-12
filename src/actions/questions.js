import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION"

// action creators
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
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