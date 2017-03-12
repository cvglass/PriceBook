import { CREATE_STORE, GET_STORES } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

const setStore = (name) => {
  return {
    type: CREATE_STORE,
    store: name
  }
}

export const createStore = (name) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`stores/${currentUser.uid}`)
      .push({name})
      .then(() => dispatch(setStore(name)))
      .then(() => Actions.user())
      .catch(err => console.log(err))
  }
}

const getStores = (list) => {
  return {
    type: GET_STORES,
    storesList: list
  }
}

export const fetchStores = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch(getStores(['a', 'b', 'c']))
  }
  // return (dispatch) => {
  //   firebase.database().ref(`stores/${currentUser.uid}`)
  //     .on('value', snap => {
  //       console.log('val', snap.val())
  //       dispatch(getStores(Object.keys(snap.val())))
  //     })
  // }
}
