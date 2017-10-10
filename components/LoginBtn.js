import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const LoginBtn = ({ color, children, navFunc }) =>
  <TouchableOpacity style={{ height: 42, width: 327, marginTop: 20, backgroundColor: color, justifyContent: 'center', alignItems: 'center' }} onPress={navFunc}>
    <Text style={{ color: 'white', fontSize: 12 }}>{children}</Text>
  </TouchableOpacity>;


export default LoginBtn;
