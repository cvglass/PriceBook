import { CREATE_PRODUCT } from '../constants';

const initialState = {
  product: {}
}

export const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_PRODUCT:
      newState.product = action.product;
      break;

    default:
      return state;
  }
  return newState;
}
