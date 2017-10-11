import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Divider } from 'react-native-elements';
import StarRateWidget from './StarRateWidget';

export default class DetailScreen extends Component {
  static navigationOptions = {
    headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
      },
    headerTintColor: '#e25f54',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{backgroundColor: '#f2f2f2'}}>
          <Card style={{width: '100%'}}>
            <Image
              style={{height: 235, width: '100%'}}
              source={this.props.navigation.state.params.imageSource}
            />
            <View style={{height: 120, width: '100%'}}>
              <Text style={{marginTop: 14, marginLeft: 16}}>NAME OF THE DISH</Text>
              <Text style={{marginLeft: 16, fontSize: 12, color: '#9b9b9b'}}>6 left  30 tried</Text>
              <Divider styleName='line' style={{marginLeft: 16, marginRight: 16, marginTop: 15}} />
              <View style={{marginTop: 14}}>
                <Text style={{marginLeft: 16, color: '#e25f54', fontSize: 18}}>$ 12.99</Text>
                <TouchableOpacity style={{position: 'absolute', right: 22, backgroundColor: '#e25f54', height: 28, width: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                  <Icon name="plus" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </Card>
          <Card style={{width: '100%', marginTop: 10}}>
            <View style={{height: 158, width: '100%'}}>
              <View style={{height: 25, width: 6, backgroundColor: '#e25f54', position: 'absolute', left: 0, top: 12}}></View>
              <Text style={{marginTop: 16, marginLeft: 16, color: '#9b9b9b', fontSize: 14}}>Dish Description</Text>
              <Text style={{marginLeft: 26, marginRight: 26, marginTop: 14, fontSize: 12, color: '#4a4a4a'}}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nunc tempus, aliquam lorem vel, aliquet risus. Sed lobortis congue metus, sit amet tempor mi laoreet eu.”
              </Text>
              <Text style={{marginLeft: 26, marginRight: 26, marginTop: 14, fontSize: 12, color: '#9b9b9b'}}>
                Country of origin: <Text style={{color: '#e25f54', fontWeight: 'bold'}}>Country Name</Text>
              </Text>
            </View>
          </Card>
          <Card style={{width: '100%', marginTop: 10}}>
            <View style={{height: 25, width: 6, backgroundColor: '#e25f54', position: 'absolute', left: 0, top: 12}}></View>
            <Text style={{marginTop: 16, marginLeft: 16, color: '#9b9b9b', fontSize: 14}}>Key Ingredients & Allergy Info</Text>
            <View style={{marginLeft: 26, marginRight: 26, marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap'}}>
              <Text style={{width: '33%'}}>Item</Text>
              <Text style={{width: '33%'}}>Item</Text>
              <Text style={{width: '33%'}}>Item</Text>
              <Text style={{width: '33%'}}>Item</Text>
              <Text style={{width: '33%'}}>Item</Text>
              <Text style={{width: '33%'}}>Item</Text>
            </View>
            <Divider styleName='line' style={{marginLeft: 16, marginRight: 16, marginTop: 15}} />
            <Text style={{marginLeft: 26, marginRight: 26, marginTop: 11, fontSize: 12, color: '#e25f54'}}>
              Please note: This dish may have following allerhens
            </Text>
            <View style={{marginLeft: 26, marginRight: 26,  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap'}}>
              <View style={{height: 28, width: 116, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e25f54', borderRadius: 2, marginRight: 27, marginTop: 12}}><Text style={{color: 'white'}}>Allergen</Text></View>
              <View style={{height: 28, width: 116, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e25f54', borderRadius: 2, marginRight: 27, marginTop: 12}}><Text style={{color: 'white'}}>Allergen</Text></View>
              <View style={{height: 28, width: 116, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e25f54', borderRadius: 2, marginRight: 27, marginTop: 12}}><Text style={{color: 'white'}}>Allergen</Text></View>
              <View style={{height: 28, width: 116, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e25f54', borderRadius: 2, marginRight: 27, marginTop: 12}}><Text style={{color: 'white'}}>Allergen</Text></View>
            </View>
            <Divider styleName='line' style={{marginLeft: 16, marginRight: 16, marginTop: 17}} />
            <View style={{marginLeft: 26, marginRight: 26, marginTop: 13, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#85acc9', borderRadius: 2, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                <Text style={{color: '#85acc9', fontSize: 12, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8}}>#tag</Text>
              </View>
              <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#85acc9', borderRadius: 2, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                <Text style={{color: '#85acc9', fontSize: 12, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8}}>#tag</Text>
              </View>
              <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#85acc9', borderRadius: 2, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                <Text style={{color: '#85acc9', fontSize: 12, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8}}>#tag</Text>
              </View>
              <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#85acc9', borderRadius: 2, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                <Text style={{color: '#85acc9', fontSize: 12, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8}}>#tag long</Text>
              </View>
            </View>
          </Card>
          <Card style={{width: '100%', marginTop: 10}}>
            <View style={{height: 25, width: 6, backgroundColor: '#e25f54', position: 'absolute', left: 0, top: 12}}></View>
            <Text style={{marginTop: 16, marginLeft: 16, color: '#9b9b9b', fontSize: 14}}>From Kitchen</Text>
            <View style={{width: '100%', flexDirection: 'column', alignItems: 'center'}}>
              <Image
                style={{height: 50, width: 50, borderRadius: 25, marginTop: 22}}
                source={require('../img/HomeChef.jpg')}
              />
              <Text style={{fontSize: 14, fontWeight: '300', color: '#4a4a4a', marginTop: 6}}>NAME OF THE CHEF</Text>
              <Text style={{fontSize: 12, color: '#9b9b9b', marginTop: 3}}>Fulton County, GA 1.5 miles</Text>
              <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
                <StarRateWidget rate={5} />
                <Text style={{fontSize: 11, color: '#9b9b9b', marginLeft: 5}}>(5.0)</Text>
              </View>
              <Text style={{fontSize: 12, color: '#9b9b9b', marginTop: 3}}>Origin: Country Name</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 30, marginBottom: 16}}>
              <View style={{width: '33%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#e25f54', fontSize: 24}}>6</Text>
                <Text style={{color: '#9b9b9b', fontSize: 12}}>DISHES</Text>
              </View>
              <View style={{width: '34%', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderLeftColor: '#d6d6d6', borderRightWidth: 1, borderRightColor: '#d6d6d6'}}>
                <Text style={{color: '#e25f54', fontSize: 24}}>365</Text>
                <Text style={{color: '#9b9b9b', fontSize: 12}}>TRIED</Text>
              </View>
              <View style={{width: '33%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#e25f54', fontSize: 24}}>435</Text>
                <Text style={{color: '#9b9b9b', fontSize: 12}}>BOOKMARKED</Text>
              </View>
            </View>
          </Card>
          <Card style={{width: '100%', marginTop: 10}}>
            <View style={{height: 25, width: 6, backgroundColor: '#e25f54', position: 'absolute', left: 0, top: 12}}></View>
            <Text style={{marginTop: 16, marginLeft: 16, color: '#9b9b9b', fontSize: 14}}>The Chef Also Makes These</Text>
            <ScrollView horizontal={true} style={{marginTop: 14, marginLeft: 16, marginBottom: 16}}>
              <View>
                <Image 
                  style={{height: 75, width: 122, borderRadius: 2}}
                  source={require('../img/Beijing-duck.jpg')} 
                />
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 2}}>Name of the dish</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 11, fontWeight: '500', color: '#e25f54'}}>$15</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>6 left</Text>
                </View>
              </View>
              <View style={{marginLeft: 15}}>
                <Image 
                  style={{height: 75, width: 122, borderRadius: 2}}
                  source={require('../img/bingtanghulu.jpg')} 
                />
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 2}}>Name of the dish</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 11, fontWeight: '500', color: '#e25f54'}}>$15</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>6 left</Text>
                </View>
              </View>
              <View style={{marginLeft: 15}}>
                <Image 
                  style={{height: 75, width: 122, borderRadius: 2}}
                  source={require('../img/gongbaojiding.jpg')} 
                />
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 2}}>Name of the dish</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 11, fontWeight: '500', color: '#e25f54'}}>$15</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>6 left</Text>
                </View>
              </View>
              <View style={{marginLeft: 15}}>
                <Image 
                  style={{height: 75, width: 122, borderRadius: 2}}
                  source={require('../img/luzhu.jpeg')} 
                />
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 2}}>Name of the dish</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 11, fontWeight: '500', color: '#e25f54'}}>$15</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>6 left</Text>
                </View>
              </View>
            </ScrollView>
          </Card>
          <Card style={{width: '100%', marginTop: 10, marginBottom: 10}}>
            <View style={{height: 25, width: 6, backgroundColor: '#e25f54', position: 'absolute', left: 0, top: 12}}></View>
            <Text style={{marginTop: 16, marginLeft: 16, color: '#9b9b9b', fontSize: 14}}>Reviews from Diners</Text>
            <View style={{width: '100%', marginTop: 15, flexDirection: 'row'}}>
              <View style={{height: 38, width: 38, borderRadius: 19, backgroundColor: '#ededed', marginLeft: 16}}>
              </View>
              <View style={{flex: 1, flexDirection: 'column', marginLeft: 10, marginRight: 16}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 14, color: '#4a4a4a'}}>User1</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>02/21/2017</Text>
                </View>
                <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
                  <StarRateWidget rate={5} />
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>(5.0)</Text>
                </View>
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 10}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nunc tempus, aliquam lorem vel, aliquet risus. Sed lobortis congue metus, sit amet tempor mi laoreet eu.”</Text>
                <Divider styleName='line' style={{marginTop: 13, marginBottom: 11}} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 14, color: '#e25f54'}}>Chef replies:</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>02/21/2017</Text>
                </View>
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 10}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</Text>
                <Divider styleName='line' style={{marginTop: 13, marginBottom: 11}} />
              </View>
            </View>
            <View style={{width: '100%', marginBottom: 16, flexDirection: 'row'}}>
              <View style={{height: 38, width: 38, borderRadius: 19, backgroundColor: '#ededed', marginLeft: 16}}>
              </View>
              <View style={{flex: 1, flexDirection: 'column', marginLeft: 10, marginRight: 16}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 14, color: '#4a4a4a'}}>User2</Text>
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>02/09/2017</Text>
                </View>
                <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
                  <StarRateWidget rate={5} />
                  <Text style={{fontSize: 11, color: '#9b9b9b'}}>(5.0)</Text>
                </View>
                <Text style={{fontSize: 12, color: '#4a4a4a', marginTop: 10}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nunc tempus, aliquam lorem vel, aliquet risus. Sed lobortis congue metus, sit amet tempor mi laoreet eu.”</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
        <View style={styles.footer}>
          <Image style={{marginLeft: 17, height: 25, width: 80}} source={require('../img/dish-detail-footer.png')} />
          <TouchableOpacity onPress={() => navigate('Chat', {user: "Yiwen's Dragon"})}>
            <Image style={{marginLeft: 10, height: 22, width: 27}} source={require('../img/chat-btn.png')} />
          </TouchableOpacity>
          <View style={{height: 47, width: 47, borderRadius: 24, borderWidth: 1, borderColor: 'white', backgroundColor: '#e25f54', position: 'absolute', right: 24, bottom: 14, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              style={{height: 21, width: 21}}
              source={require('../img/cart.png')} 
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 52,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#cbcbcb',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
