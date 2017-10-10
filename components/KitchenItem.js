import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default class KitchenItem extends Component {
  render() {
    const { imgSrc, quantity, navFunc, index } = this.props;
    return (
      <View style={(index !== 0) && {marginLeft: 15}}>
        <TouchableOpacity onPress={navFunc}>
          <Image 
            style={styles.dishImage}
            source={imgSrc}
          />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dishImage: {
    height: 75,
    width: 122,
    borderRadius: 2,
  },
  quantityText: {
    fontSize: 11,
    color: '#9b9b9b',
    marginTop: 2,
    alignSelf: 'flex-end',
  },
});
