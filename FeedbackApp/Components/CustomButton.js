import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class customButton extends Component {
	render() {
		const { title, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <Text style={styles.textStyle}>{title}</Text>
		  </TouchableOpacity>
		);
	}
}

customButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: '#454546',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    elevation: 4,
    height: 55,
    width: 250
  }
});

export default customButton;