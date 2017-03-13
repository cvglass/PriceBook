import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { Scene, Router } from 'react-native-router-flux';
import firebase from 'firebase';

import rootReducer from './reducers'

import User from './component/userComponent';
import Signup from './component/signupComponent';
import Login from './component/loginComponent';
import AddProduct from './component/addProductComponent'
import AddStore from './component/addStoreComponent';
import Stores from './component/storesComponent';
import Products from './component/productsComponent';
import ShoppingList from './component/shoppingListComponent';

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
            <Scene key="signup" component={Signup} title="Signup" />
            <Scene key="user" component={User} title="User" />
            <Scene key="login" title="Login" component={Login} initial={true} />
            <Scene key="addProduct" title="Add a product" component={AddProduct} />
            <Scene key="addStore" title="Add a store" component={AddStore} />
            <Scene key="stores" title="Select a Store" component={Stores} />
            <Scene key="products" title="Your Products" component={Products} />
            <Scene key="list" title="Your Shopping List" component={ShoppingList} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
