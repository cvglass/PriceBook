import React, { Component } from 'react';
import { View, Text, TextInput, CardSection, Input, Card } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { createUser } from '../actionCreators/usersActionCreators'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: ''
    }
    // this.props.onPressCreateUser = this.props.onPressCreateUser.bind(this)

  }

  onSubmit(){
    const { name, email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.props.onPressCreateUser(this.state.name, this.state.email))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <Text>Please create an account.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          style={{height: 40}}
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Text onPress={this.onSubmit.bind(this)}>SUBMIT</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressCreateUser: (name, email) => dispatch(createUser(name, email))
  }
}
export default connect(null, mapDispatchToProps)(Signup)
