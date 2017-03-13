import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchList } from '../actionCreators/productActionCreators'

class ShoppingList extends Component {
  componentWillMount() {
    this.props.onEnter()
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <ScrollView>
          {this.props.list.map(list => {
            return (
              <Text>{list.product.id}</Text>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.productReducer.shoppingList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnter: () => dispatch(fetchList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
