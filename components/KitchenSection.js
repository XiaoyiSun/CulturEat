import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
import KitchenItem from './KitchenItem';
import StarRateWidget from './StarRateWidget';

export default class KitchenSection extends Component {
  render() {
    const { kitchenTitle, kitchenDecription, reviewsNumber, openStatus, chefImage, distance, dishes, rate, isLast, navigation } = this.props;
    return (
      <View style={(isLast) ? {height: 193, marginBottom: 40} : {height: 193}}>
        <Divider styleName='line' style={{marginTop: 13, marginLeft: 16, marginRight: 16, width: 343}} />
        <View style={styles.kitchenHeader}>
          <View>
            <Text style={styles.kitchenTitle}>{kitchenTitle}</Text>
            <Text style={styles.kitchenDecription}>{kitchenDecription}</Text>
            <View style={styles.kitchenStatusContainer}>
              <StarRateWidget rate={rate} />
              <Text style={{fontSize: 12, color: '#9b9b9b', lineHeight: 16, marginLeft: 7}}>{reviewsNumber}</Text>
              <Text style={{fontSize: 12, color: '#8ac96b', lineHeight: 16, marginLeft: 13}}>{openStatus}</Text>
            </View>
          </View>
          <Image
            style={styles.chefImage}
            source={chefImage}
          />
        </View>
        <ScrollView horizontal={true} style={{marginTop: 10, marginLeft: 16}}>
          {dishes.map((item, index) => <KitchenItem
            key={item.key}
            imgSrc={item.src}
            quantity={item.quantity}
            navigation={navigation}
            index={index}
          />)}
        </ScrollView>
        <Text style={styles.distanceText}>{distance}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  kitchenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
    marginLeft: 18,
    marginRight: 18,
  },
  kitchenTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4a4a4a',
    lineHeight: 19,
  },
  kitchenDecription: {
    fontSize: 12,
    color: '#4a4a4a',
    lineHeight: 16,
  },
  kitchenStatusContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chefImage: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  distanceText: {
    fontSize: 12,
    color: '#e25f54',
    lineHeight: 16,
    position: 'absolute',
    top: 180,
    right: 18,
  },
});
