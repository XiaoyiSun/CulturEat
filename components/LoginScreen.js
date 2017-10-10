import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { Divider } from 'react-native-elements';
import LoginBtn from './LoginBtn';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      isNewUser: true,
    };
  }
  static navigationOptions = {
    header: null
  };
  getActiveTabStyle = () => {
    return {
      fontSize: 14,
      fontWeight: '500',
      color: this.state.isNewUser ? '#4a4a4a' : '#9b9b9b',
    }
  }
  getInactiveTabStyle = () => {
    return {
      fontSize: 14,
      fontWeight: '500',
      color: this.state.isNewUser ? '#9b9b9b' : '#4a4a4a',
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
        source={require('../img/BG.png')}
        style={styles.backgroundContainer}>
        <Image
          source={require('../img/CulturEat.png')}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>a gourment dish full of cultural stories</Text>
        <View style={{marginTop: 23, width: 327, flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({isNewUser: true})}
          >
            <View>
              <Text style={this.getActiveTabStyle()}>SIGN IN</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.setState({isNewUser: false})}
          >
            <View>
              <Text style={this.getInactiveTabStyle()}>SIGN UP</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          {this.state.isNewUser ? (
            <SignInForm />
          ) : (
            <SignUpForm />
          )}
        </View>
        <Text style={{marginTop: 19, marginLeft: 23, marginRight: 23, fontSize: 12, color: '#9b9b9b'}}>I Agree to the Website Terms of Use, and Privacy Policy.</Text>
        <LoginBtn color='#e25f54' navFunc={() => navigate('Main')}>{this.state.isNewUser ? 'SIGN IN' : 'SIGN UP'}</LoginBtn>
        <View style={{ width: 327, height: 1, marginLeft: 24, marginRight: 24, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Divider styleName='line' style={{height: 2, width: 142, backgroundColor: '#d6d6d6'}} />
          <Text style={{fontSize: 12, color: '#9b9b9b'}}>or</Text>
          <Divider styleName='line' style={{height: 2, width: 142, backgroundColor: '#d6d6d6'}} />
        </View>
        <LoginBtn color='#3d5998' navFunc={() => navigate('Main')} >SIGN IN WITH FACEBOOK</LoginBtn>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: null,
    height: null,
    alignItems: 'center',
  },
  logo: {
    marginTop: 46,
    height:38,
    width: 177,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '100',
    color: '#4a4a4a',
  },
});
