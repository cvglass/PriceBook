import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchProducts, addProductToList } from '../actionCreators/productActionCreators'

class Products extends Component {
  constructor(props) {
    super(props);
    this.props.add = this.props.add.bind(this);
  }

  componentWillMount() {
    this.props.onEnter()
  }


  render() {
    return (
      <View style={{margin: 25}}>
        <ScrollView>
          {this.props.products.map(product => {
            const stores = Object.keys(product);
            const stuff = stores.map((store, index) => {
              if(index < stores.length-1){
                return (
                  <Text>{product[store].price} per {product[store].unit} at {store}{'\n'}</Text>
                )
              }
            })
            return (
              <View style={{margin:50}}>
                <Text onPress={() => this.props.add(product)}>{product.id} + </Text>
                <Text>{stuff}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.productsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnter: () => dispatch(fetchProducts()),
    add: (item) => dispatch(addProductToList(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
