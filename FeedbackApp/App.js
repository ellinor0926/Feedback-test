import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen.js';
import SendFeedbackScreen from './Screens/SendFeedbackScreen.js';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Send: {screen: SendFeedbackScreen},
}, {initialRouteName: 'Home'});

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
