import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GameScreen from './screens/GameScreen';
import LoginScreen from './screens/LoginScreen';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <AppStackNavigator/>
    )
  }
}

export default App;

const AppStackNavigator = createStackNavigator(
  {
    Login:{
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Game:{
      screen: GameScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
)

