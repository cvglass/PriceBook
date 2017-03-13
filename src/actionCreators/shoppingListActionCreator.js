import { CREATE_LIST } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

exoprt const createList = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`shoppingList/${currentUser.uid}`)
  }
}
