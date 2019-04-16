import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };

    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      };

    case ANSWER_QUESTION:
      const { answer, authedUser, questionId } = action.payload
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
          }
        }
      };

    default:
      return state;
  }
};

export default users;
