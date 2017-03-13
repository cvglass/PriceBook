import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class User extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>WELCOME!</Text>
        <Text onPress={Actions.addStore}>Add store</Text>
        <Text onPress={Actions.stores}>View your stores</Text>
        <Text onPress={Actions.products}>View your products</Text>
      </View>
    )
  }
}
