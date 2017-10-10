import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const StorySection = () =>
  <Card style={{width: '100%', marginTop: 10}}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>STORIES BEHIND DISHES</Text>
      </View>
      <View>
        <Image
          style={{width: 343, height: 166, alignSelf: 'center'}}
          source={require('../img/KungPao.jpg')}
        />
        <FontAwesome name='bookmark-o' size={20} color='white' style={styles.bookmarkIcon} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.dishTitle}>The Story of Kung Pao Chicken</Text>
        <Text style={styles.dishType}>Chinese Cuisine</Text>
      </View>
    </View>
  </Card>;

const styles = StyleSheet.create({
  container: {
    height: 247,
    width: '100%',
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#4a4a4a',
    fontWeight: '500',
  },
  dishTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
    color: '#e25f54',
  },
  dishType: {
    fontSize: 12,
    lineHeight: 16,
    color: '#9b9b9b',
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 34,
    top: 137,
    backgroundColor: 'transparent',
  },
  footerContainer: {
    marginTop: 13,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
});

export default StorySection;
