import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import { fetchStores, setStore } from '../actionCreators/storeActionCreators'

class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: ''
    }
  }

  componentWillMount(){
    this.props.onEnter()
  }

  onSubmit() {
    const name = this.state.store
    this.props.onPressStoreName(name);
    Actions.addProduct()
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <Picker
          selectedValue={this.state.store}
          onValueChange={(store) => this.setState({store})}>
          {this.props.stores.map(store => {
            return (
              <Picker.Item label={store.name} value={store.name} />
            )
          })}
        </Picker>
        <Text onPress={this.onSubmit.bind(this)}>SUBMIT</Text>
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
    onEnter: () => dispatch(fetchStores()),
    onPressStoreName: (name) => dispatch(setStore(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores)
