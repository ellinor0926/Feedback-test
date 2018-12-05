import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { updateFocus, getCurrentRouteKey } from 'react-navigation-is-focused-hoc';
import HomeScreen from './Screens/HomeScreen.js';
import SendFeedbackScreen from './Screens/SendFeedbackScreen.js';
import CameraScreen from './Screens/CameraScreen.js';
import ScannerScreen from './Screens/ScannerScreen';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Send: {screen: SendFeedbackScreen},
  Camera : {screen: CameraScreen},
  Scanner: {screen: ScannerScreen}
}, {initialRouteName: 'Home'});

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render() {
    return <AppContainer 
      onNavigationStateChange={(prevState, currentState) => {
        updateFocus(currentState)
      }}
    />;
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
