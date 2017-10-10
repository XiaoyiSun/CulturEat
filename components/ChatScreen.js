import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DialogRight from './DialogRight';
import DialogLeft from './DialogLeft';
// import Pusher from 'pusher-js/react-native';
import VoiceBtn from './VoiceBtn';

export default class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      dialog: [],
    };
  }

  componentWillMount() {
    // Pusher.logToConsole = false;
    // const pusher = new Pusher('xxxxxxxxxxxxxxxxxxxx', {
    //   encrypted: true
    // });
    // const channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', data => this._receiveMessage(data.message));
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.user}`,
      headerRight: <Image style={{width: 20, height: 20}} source={require('../img/face.png')} />,
      headerStyle: {paddingRight: 16},
      headerTitleStyle: {color: '#4a4a4a', height: 20, fontSize: 17},
      headerTintColor: '#e25f54',
    }
  };

  _sendMessage(text) {
    this.setState({dialog: [...this.state.dialog, { role: 'right', text }]});
    this._textInput.setNativeProps({text: ''});
    // fetch('http://localhost:3000/sms-post', {  
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     content: text,
    //   })
    // }).done();
  }

  _receiveMessage(text) {
    this.setState({dialog: [...this.state.dialog, { role: 'left', text }]});
  }

  _renderItem = function({item}) {
    alert(JSON.stringify(item));
    if (item.role === 'right') {
      return <DialogRight key={item.text} text={item.text} />;
    } else {
      return <DialogLeft key={item.text} text={item.text} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dialogContainer}>
          <FlatList
            data={this.state.dialog}
            renderItem={this._renderItem.bind(this)}
          />
        </View>
        <View style={styles.footer}>
          <View style={{marginRight: 10}}>
            <TouchableOpacity style={{backgroundColor: '#e25f54', height: 24, width: 30, borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome name="plus" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              ref={component => this._textInput = component}
              style={styles.textInputStyle}
              placeholder="Ask or share anything"
              placeholderTextColor="#c7c7cc"
              onSubmitEditing={(event) => this._sendMessage(event.nativeEvent.text)}
            />
          </View>
          <VoiceBtn />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  dialogContainer: {
    flex: 12,
    backgroundColor: '#f2f2f2',
  },
  textInputWrapper: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 36,
    width: '100%',
    borderColor: '#c7c7c7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    fontSize: 16,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
});
