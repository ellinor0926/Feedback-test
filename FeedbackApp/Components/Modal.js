import React, { Component } from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import Modal from "react-native-modal";
import AttachButton from "./AttachButton";

export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    openCamera = () => {
      this.props.openCamera();
      this.setState({isModalVisible: false})
    }

  render() {


    return (
      <View>

        <AttachButton onAttachPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </AttachButton>

        <Modal 
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            onBackButtonPress={() => this.setState({ isModalVisible: false })}
            >
          
          <View style={styles.modalContent}>
            <Button title='Camera' onPress={this.openCamera} />
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = {
    modal: {
        marginTop: 50,
      },
      modalContent: {
        backgroundColor: 'white',
        height: 100
    }
}