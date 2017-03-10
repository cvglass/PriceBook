import { CREATE_USER } from '../constants';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const createUser = ({name, email}) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}`)
      .set({name, email})
      .then(() => dispatch({type: CREATE_USER, user: {name, email}}));
      Actions.main('user')
  }
}

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
