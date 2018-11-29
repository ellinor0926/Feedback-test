import React, {Component} from 'react';
import { Text, TouchableOpacity, View, Button } from "react-native";
import Camera from '../Components/Camera';

class CameraScreen extends Component {

    static navigationOptions = {
        title: 'Camera',
      };

      render() {
        const {navigate} = this.props.navigation;

        return <Camera />
      }
}

export default CameraScreen;