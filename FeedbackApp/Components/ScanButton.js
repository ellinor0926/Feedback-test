import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

class ScanButton extends Component {


	render() {
        const { onScanPress } = this.props;
		return (
            <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={onScanPress}
            >
                <Image style={styles.imageStyle} source={require('../assets/barcode.png')} />
            </TouchableOpacity>
            <Text>Scan</Text>
          </View>
		);
	}
}


const styles = StyleSheet.create({
  imageStyle: {
    width: 35,
    height: 35,
    position: 'absolute'
  },
  buttonStyle: {
	padding:10,
	backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    elevation: 4,
    borderRadius: 100,
    width: 55,
    height: 55,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
  }
});

export default ScanButton;