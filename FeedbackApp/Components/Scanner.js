import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _onBarCodeRead = code => {
    const itemNumber = code.data.substring(0, 8);
    const supplierNumber = code.data.substring(8, 13)

    this.props.onBarCodeRead(itemNumber, supplierNumber)
  };

  render() {
      return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={this._onBarCodeRead}
                style={[StyleSheet.absoluteFill, styles.scanner]}
            >
                {/* <Image 
                    source={require('../assets/frame.png')}
                    style={styles.frameImage} 
                /> */}

            </BarCodeScanner>
      </View>
      )
  }
}

const styles = {
    container: {
        flex: 1, 
        alignItems: 'center' 
    },
    scanner: {
        justifyContent: 'center'
    },
    frameImage: {
        alignSelf: 'center',
        height: 200,
        width: 200
    }
}

