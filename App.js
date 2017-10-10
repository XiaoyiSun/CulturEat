import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ChatScreen from './components/ChatScreen';
import DetailScreen from './components/DetailScreen';

export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Main: {
    screen: MainScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
});
