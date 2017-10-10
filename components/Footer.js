import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () =>
  <View style={styles.footerContainer}>
    <View style={styles.footerTab}>
      <Image
        style={{height: 23, width: 23}}
        source={require('../img/explore.png')}
      />
      <Text style={styles.footerText}>Explore</Text>
    </View>
    <View style={styles.footerTab}>
      <Image
        style={{height: 23, width: 23}}
        source={require('../img/assitant.png')}
      />
      <Text style={styles.footerText}>Assistant</Text>
    </View>
    <View style={styles.footerTab}>
      <Image
        style={{height: 23, width: 23}}
        source={require('../img/profile.png')}
      />
      <Text style={styles.footerText}>My Account</Text>
    </View>
  </View>;

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 52,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#cbcbcb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerTab: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#c9c9c9',
    lineHeight: 16,
    marginTop: 2,
  },
});

export default Footer;
