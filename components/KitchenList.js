import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import KitchenSection from './KitchenSection';

export default class KitchenList extends Component {
  render() {
    const KITCHENS = [
      {
        key: '0',
        kitchenTitle: "CHEF NITSCHE",
        kitchenDecription: "German cuisine, new American fusion",
        reviewsNumber: "52 reviews $$",
        openStatus: "open now",
        chefImage: require('../img/germanchef.jpg'),
        distance: "0.7 miles",
        dishes: [
          {key: '0', src: require('../img/German1.jpg'), quantity: '3 left'},
          {key: '1', src: require('../img/German2.jpg'), quantity: '9 left'},
          {key: '2', src: require('../img/German3.jpg'), quantity: '6 left'},
        ],
        rate: 4,
      },
      {
        key: '1',
        kitchenTitle: "YIWEN'S DRAGON",
        kitchenDecription: "Chinese cuisine, tofu soup",
        reviewsNumber: "46 reviews $",
        openStatus: "open now",
        chefImage: require('../img/HomeChef.jpg'),
        distance: "1.2 miles",
        dishes: [
          {key: '0', src: require('../img/wandouhuang.jpg'), quantity: '6 left'},
          {key: '1', src: require('../img/Beijing-duck.jpg'), quantity: '15 left'},
          {key: '2', src: require('../img/bingtanghulu.jpg'), quantity: '2 left'},
        ],
        rate: 5,
      },
      {
        key: '2',
        kitchenTitle: "SAHIB & CURRY",
        kitchenDecription: "Indian street food, vegetarian options",
        reviewsNumber: "52 reviews $",
        openStatus: "open now",
        chefImage: require('../img/INDIANcHEF.jpg'),
        distance: "2.3 miles",
        dishes: [
          {key: '0', src: require('../img/Indian.jpg'), quantity: '4 left'},
          {key: '1', src: require('../img/Indian2.jpg'), quantity: '6 left'},
          {key: '2', src: require('../img/Indian3.jpg'), quantity: '8 left'},
        ],
        rate: 4,
      },
    ];
    return (
      <Card style={{width: '100%', marginTop: 10}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>NEARBY KITCHENS</Text>
          </View>
          <View style={styles.sortContainer}>
            <FontAwesome name='sort-amount-desc' size={12} color='#4285f4' />
            <Text style={styles.sortText}>DISTANCE</Text>
          </View>
          {KITCHENS.map((kitchen, index) => <KitchenSection
            key={kitchen.key}
            kitchenTitle={kitchen.kitchenTitle}
            kitchenDecription={kitchen.kitchenDecription}
            reviewsNumber={kitchen.reviewsNumber}
            openStatus={kitchen.openStatus}
            chefImage={kitchen.chefImage}
            distance={kitchen.distance}
            dishes={kitchen.dishes}
            rate={kitchen.rate}
            navigation={this.props.navigation}
            isLast={index === KITCHENS.length - 1}
          />)}
        </View>
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
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 16,
  },
  sortText: {
    fontSize: 14,
    color: '#4285f4',
    lineHeight: 19,
    marginLeft: 6,
  },
});
