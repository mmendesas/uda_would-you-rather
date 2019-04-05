import { SET_AUTH_USER } from "../actions/authedUser";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    default:
      return action;
  }
};

export default authedUser;
