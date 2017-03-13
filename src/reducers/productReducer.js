import { CREATE_PRODUCT, GET_PRODUCTS, GET_LIST } from '../constants';

const initialState = {
  product: {},
  productsList: [],
  shoppingList: []
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

    case GET_LIST:
      newState.shoppingList = action.list;
      break;

    default:
      return state;
  }
  return newState;
}
