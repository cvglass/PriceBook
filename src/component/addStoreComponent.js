import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux'

import { createStore } from '../actionCreators/storeActionCreators'

class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onSubmit() {
    const { name } = this.state;
    this.props.onPressCreateStore(this.state.name)
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <Text>Add a store below</Text>
        <TextInput
          style={{height: 40}}
          placeholder="store name"
          onChangeText={(name) => this.setState({name})}
        />
        <Text onPress={this.onSubmit.bind(this)}>SUBMIT</Text>
      </View>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressCreateStore: (name) => dispatch(createStore(name))
  }
}

export default connect(null, mapDispatchToProps)(AddStore)
