import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Divider } from 'react-native-elements';

export default SignUpForm = () => (
  <View style={{alignItems: 'center'}}>
    <View style={{marginTop: 11, height: 4, width: 327, flexDirection: 'row', justifyContent: 'center'}}>
      <Divider styleName='line' style={{height: 2, width: 163, backgroundColor: '#d6d6d6'}} />
      <Divider styleName='line' style={{height: 4, width: 163, backgroundColor: '#e25f54', borderRadius: 15}} />
    </View>
    <View style={{marginTop: 27}}>
      <TextInput
        style={styles.loginInput}
        placeholder="EMAIL"
        placeholderTextColor="#9b9b9b"
        onChangeText={(text) => this.setState({text})}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="PASSWORD"
        placeholderTextColor="#9b9b9b"
        onChangeText={(text) => this.setState({text})}
      />
    </View>
    <Text style={styles.hintText}>Please include at least one upper letter, one number, and a special letter ($, %, etc...), 8-20 characters.</Text>
  </View>
);

const styles = StyleSheet.create({
  loginInput: {
    height: 43,
    width: 327,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    backgroundColor: '#f7f7f7',
    paddingLeft: 12,
    fontSize: 12,
  },
  hintText: {
    marginTop: 17,
    fontSize: 12,
    color: '#e25f54',
    width: 327,
  },
});
