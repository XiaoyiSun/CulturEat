import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

export default class HotDealItem extends Component {
  render() {
    const { title, imgSrc } = this.props;
    return (
      <Image 
        style={styles.backgroundImage}
        source={imgSrc}
      >
        <View style={styles.coverContainer}>
          <Text style={styles.coverText}>{title}</Text>
          <Divider styleName='line' style={styles.coverDivider} />
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 98,
    width: 92,
    borderRadius: 2,
  },
  coverContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(74, 74, 74, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverText: {
    width: 55,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#ededed',
  },
  coverDivider: {
    width: 63,
    borderColor: '#ededed',
    position: 'absolute',
    left: 15.5,
    top: 83.5,
  },
});
