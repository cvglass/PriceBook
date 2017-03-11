import { CREATE_USER } from '../constants';

const initialState = {
  user: {}
}

export const usersReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case CREATE_USER:
      newState.user = action.user;
      break;

    default:
      return state;
  }
}
