import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import HotDealItem from './HotDealItem';

export default class HotDealSection extends Component {
  render() {
    const HOTDEALS = [
      {
        key: '0',
        title: "Homemade pizza under $10",
        imgSrc: require('../img/Pizza.jpg'),
      },
      {
        key: '1',
        title: "Easter desserts",
        imgSrc: require('../img/easter.jpg'),
      },
      {
        key: '2',
        title: "Atlanta homemade outings",
        imgSrc: require('../img/Atlanta.jpg'),
      },
      {
        key: '3',
        title: "On diet gourmets",
        imgSrc: require('../img/ondiet.jpeg'),
      },
    ];
    return (
      <Card style={{width: '100%', marginTop: 10}}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>HOT DEALS NEAR YOU</Text>
        </View>
        <ScrollView horizontal={true} style={styles.itemContainer}>
          {HOTDEALS.map((deal, index) =>
            <View
              key={deal.key}
              style={(index !== 0) && {marginLeft: 15}}
            >
              <HotDealItem
                title={deal.title}
                imgSrc={deal.imgSrc}
              />
            </View>
          )}
        </ScrollView>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#4a4a4a',
    fontWeight: '500',
  },
  itemContainer: {
    marginTop: 11,
    marginLeft: 16,
    marginBottom: 16,
  },
});
