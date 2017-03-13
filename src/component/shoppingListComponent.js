import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class ShoppingList extends Component {
  render() {
    return (
      <View style={{margin: 25}}>
        <ScrollView>
          {this.props.shoppingList.map(list => {
            return (
            <Text>{list.name}</Text>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
