import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card } from 'react-native-elements';

export default class Header extends Component {
  render() {
    // pass props to determine whether Breakfast or Lunch or Dinner
    return (
      <Card style={{width: '100%'}}>
        <Image
          style={{height: 103, width: '100%'}}
          source={require('../img/header.png')}
        />
      </Card>
    );
  }
}
