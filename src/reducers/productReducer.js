import { CREATE_PRODUCT, GET_PRODUCTS } from '../constants';

const initialState = {
  product: {},
  productsList: []
}

export const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_PRODUCT:
      newState.product = action.product;
      break;

    case GET_PRODUCTS:
      newState.productsList = action.productsList;
      break;

    default:
      return state;
  }
  return newState;
}
