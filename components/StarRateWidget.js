import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRateWidget = ({ rate }) =>
  <View style={{flexDirection: 'row'}}>
    {[...Array(rate).keys()].map((key) => <FontAwesome key={key} name='star' size={12} color='#e25f54' />)}
    {[...Array(5 - rate).keys()].map((key) => <FontAwesome key={key+rate} name='star' size={12} color='#d3d3d3' />)}
  </View>;

export default StarRateWidget;
