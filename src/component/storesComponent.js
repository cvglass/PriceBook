import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchStores } from '../actionCreators/storeActionCreators'

class Stores extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.onEnter()
  }

  render() {
    console.log('props', this.props)
    return (
      <View style={{margin: 125}}>
        <ScrollView>
          {this.props.stores.map(store => {
            return (
              <Text key={store.name}>{store.name}</Text>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.storeReducer.storesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnter: () => dispatch(fetchStores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores)
