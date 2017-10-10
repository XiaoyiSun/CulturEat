import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const DialogLeft = ({ text }) =>
  <View style={styles.container}>
    <Image style={styles.dialogAvatar} source={require('../img/HomeChef.jpg')} />
    <View style={styles.dialogTriangle} />
    <View style={styles.dialogTextWrapper}>
      <Text style={styles.dialogText}>{text}</Text>
    </View>
  </View>;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  dialogTextWrapper: {
    width: 184,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
  },
  dialogText: {
    lineHeight: 16,
    color: '#4a4a4a',
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
    borderRightWidth: 8,
    borderRightColor: 'white',
    marginTop: 14,
  },
  dialogAvatar: {
    height: 39,
    width: 39,
    marginTop: 2,
    marginRight: 8,
    marginLeft: 15,
    borderRadius: 20,
  },
});


export default DialogLeft;
