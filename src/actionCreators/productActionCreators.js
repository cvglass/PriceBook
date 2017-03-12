import { CREATE_PRODUCT } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

//not sure how necessary it is to set product
const setProduct = (name, price, unit, store) => {
  return {
    type: CREATE_PRODUCT,
    product: {name, price, unit, store}
  }
}

export const createProduct = (name, price, unit, store) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`products/${currentUser.uid}/`)
      .push({
        name: name,
        price: price,
        unit: unit,
        store: store
      })
      .then(() => dispatch(setProduct(name, price, unit, store)))
  }
}
