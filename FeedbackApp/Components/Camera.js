import React from 'react';
import { Text, View, TouchableOpacity, Image, CameraRoll } from 'react-native';
import { Camera, Permissions, MediaLibrary, Asset } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    flash: false,
    hasCameraRollPermission: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    const rollStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: rollStatus === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      // CameraRoll.saveToCameraRoll("file:///sdcard/img.png").then(res => console.log(res))
      const album = await MediaLibrary.getAlbumAsync('Feedback Photos');
      // if(album) {
      //   await CameraRoll.saveToCameraRoll(`file:///${album}${photo.uri}`)
      // } else {
      //   await MediaLibrary.createAlbumAsync('Feedback Photos', photo)
      // }
      console.log(photo);
    }
  };

  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    });
  }

  toggleFlash = () => {
    const toggledFlash = !this.state.flash
    this.setState({
      flash: toggledFlash,
      flashMode: this.state.flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    });

  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.state.type}
            ref={ref => { this.camera = ref; }}
            flashMode={this.state.flashMode}
            >
            <View style={styles.cameraFooter}>
              <TouchableOpacity
                style={styles.flipButton}
                onPress={this.flipCamera}>
                <Image 
                  source={require('../assets/switch-camera-button.png')} 
                  style={styles.flipImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.snapButton}
                onPress={this.snap}>
                <Image 
                  source={require('../assets/snap-pizzicato.png')} 
                  style={styles.snapImage}  
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.flashButton}
                onPress={this.toggleFlash}>
                {this.state.flash === true ? 
                <Image 
                  source={require('../assets/flash.png')} 
                  style={styles.flashImage}  
                />
                :
                <Image 
                  source={require('../assets/flash-off.png')} 
                  style={styles.flashImage}  
                />
                }
                
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = {
  cameraFooter: {
    flex: 0.5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 8,
    justifyContent: 'space-around'
  },
  flipButton: {
    flex: 0.1,
    alignSelf: 'center',
  },
  flipImage: {
    height: 40,
    width: 40,
  },
  snapButton: {
    alignSelf: 'center'
  },
  snapImage: {
    height: 70,
    width: 70
  },
  flashButton: {
    flex: 0.1,
    alignSelf: 'center',
  },
  flashImage: {
    height: 40,
    width: 40,
  }
}