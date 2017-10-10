import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const DialogRight = ({ text }) =>
  <View style={styles.container}>
    <View style={styles.dialogTextWrapper}>
      <Text style={styles.dialogText}>{text}</Text>
    </View>
    <View style={styles.dialogTriangle} />
    <Image style={styles.dialogAvatar} source={require('../img/nick.jpg')} />
  </View>;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  dialogTextWrapper: {
    width: 184,
    borderRadius: 8,
    backgroundColor: '#e25f54',
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
  },
  dialogText: {
    lineHeight: 16,
    color: 'white',
    fontSize: 12,
    minHeight: 32,
  },
  dialogTriangle: {
    height: 0,
    width: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: '#e25f54',
    marginTop: 14,
  },
  dialogAvatar: {
    height: 39,
    width: 39,
    marginTop: 2,
    marginRight: 15,
    marginLeft: 8,
    borderRadius: 20,
  },
});


export default DialogRight;
