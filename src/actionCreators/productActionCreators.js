import { CREATE_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, GET_LIST } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import _ from 'lodash';

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
    firebase.database().ref(`products/${currentUser.uid}/${name}/${store}`)
      .set({
        price: price,
        unit: unit
      })
      .then(() => dispatch(setProduct(name, price, unit, store)))
  }
}

export const setProducts = (list) => {
  return {
    type: GET_PRODUCTS,
    productsList: list
  }
}

export const fetchProducts = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`products/${currentUser.uid}`)
      .on('value', snap => {
        let library = _.map(snap.val(), (val, id) => {
          return { ...val, id}
        });
        dispatch(setProducts(library))

      })
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product
  }
}

export const addProductToList = (product) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`shoppingList/${currentUser.uid}`)
      .push({product})
    .then(() => dispatch(addProduct(product)))
  }
}

export const setList = (list) => {
  return {
    type: GET_LIST,
    list: list
  }
}

export const fetchList = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`shoppingList/${currentUser.uid}`)
      .on('value', snap => {
        let library = _.map(snap.val(), (val, id) => {
          return { ...val, id}
        });
        dispatch(setList(library))
      })
  }

}
