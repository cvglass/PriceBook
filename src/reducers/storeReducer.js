import { CREATE_STORE, GET_STORES } from '../constants';

const initialState = {
  store: '',
  storesList: []
}

export const storeReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_STORE:
      newState.store = action.store;
      break;

    case GET_STORES:
      newState.storesList = action.storesList;
      break;

    default:
      return state;
  }
  return newState;
}
