import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/CustomButton.js';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>

            <View style={styles.buttonContainer}>
              <Button
                clear={true}
                title="SEND FEEDBACK"
                onPress={() => navigate('Send')}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                color='white'
                title="MESSAGES"
                onPress={() => navigate('Send')}
              />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                color='white'
                title="MY FEEDBACK"
                onPress={() => navigate('Send')}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="SIGN OUT"
                onPress={() => navigate('Send')}
              />
            </View>

          </View>
      );
    }
  }

  const styles = {
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      buttonContainer: {
          width: 250,
          height: 55,
          margin: 10,
        //   borderStyle: 'solid',
        //   borderColor: 'lightgrey',
        //   borderWidth: 1
      }
  }


  export default HomeScreen;