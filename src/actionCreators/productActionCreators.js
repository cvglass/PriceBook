import { CREATE_PRODUCT } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

//not sure how necessary it is to set product
const setProduct = (name, price, unit) => {
  return {
    type: CREATE_PRODUCT,
    product: {name, price, unit}
  }
}

export const createProduct = (name, price, unit) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`products/${name}`)
      .push({
          price: price,
          unit: unit,
          user: currentUser.uid
      })
      .then(() => dispatch(setProduct(name, price, unit)))
      .then(() => Actions.user())
      .catch(err => console.log(err))
  }
}
