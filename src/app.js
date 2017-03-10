import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { Scene, Router } from 'react-native-router-flux';
import firebase from 'firebase';

import rootReducer from './reducers'

import User from './component/userComponent'

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCtj5Pcgt03uhzGRmdtJo4aGTOAYKI_Khc',
      authDomain: 'pricebook-b48f6.firebaseapp.com',
      databaseURL: 'https://pricebook-b48f6.firebaseio.com',
      storageBucket: 'pricebook-b48f6.appspot.com',
      messagingSenderId: '739820081696'
    })
  }

  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
        <Router>
          <Scene key="root">
            <Scene key="user" component={User} title="User" initial={true} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
