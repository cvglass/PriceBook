import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => Actions.user())
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <Text>Please login</Text>
        <TextInput
          style={{height: 40}}
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
        />
        <Text onPress={this.onSubmit.bind(this)}>SUBMIT</Text>
        <Text>Don't have an account?</Text>
        <Text onPress={Actions.signup}>Click here to signup</Text>
      </View>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPressLoginUser: (email) => dispatch(loginUser(email))
//   }
// }
