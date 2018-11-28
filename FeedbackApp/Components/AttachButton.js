import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

class AttachButton extends Component {


	render() {
        const { onAttachPress } = this.props;
		return (
            <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={onAttachPress}
            >
                <Image style={styles.imageStyle} source={require('../assets/photo-camera.png')} />
            </TouchableOpacity>
            <Text>Attach</Text>
          </View>
		);
	}
}


const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
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
      marginTop: 15
  }
});

export default AttachButton;