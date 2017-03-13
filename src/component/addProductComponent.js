import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import { createProduct } from '../actionCreators/productActionCreators'

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      unit: ''
    }
  }

  onSubmit() {
    const {name, price, unit} = this.state;
    this.props.onPressCreateProduct(this.state.name, this.state.price, this.state.unit, this.props.selectedStore);
    Actions.products();
  }

  render() {
    return (
      <View style={{margin: 125}}>
        <Text>Add a product below</Text>
        <TextInput
          style={{height: 40}}
          placeholder="product name"
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="price per serving"
          onChangeText={(price) => this.setState({price})}
        />
        <Picker
          selectedValue={this.state.unit}
          onValueChange={(unit) => this.setState({unit})} >
          <Picker.Item label="oz" value="oz" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="lb" value="lb" />
          <Picker.Item label="each" value="each" />
        </Picker>
        <Text onPress={this.onSubmit.bind(this)}>SUBMIT</Text>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    selectedStore: state.storeReducer.store
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressCreateProduct: (name, price, unit, store) => dispatch(createProduct(name, price, unit, store))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
