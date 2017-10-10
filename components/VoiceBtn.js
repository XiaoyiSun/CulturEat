import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const VoiceBtn = () =>
  <TouchableOpacity style={{ backgroundColor: '#e25f54', height: 26, width: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 22 }}>
    <FontAwesome name="microphone" size={16} color="white" />
  </TouchableOpacity>;


export default VoiceBtn;
