import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, KeyboardAvoidingView, ScrollView, Header } from 'react-native';
import AttachButton from '../Components/AttachButton';
import Modal from '../Components/Modal';

class SendFeedback extends React.Component {
    static navigationOptions = {
      title: 'Send Feedback',
    };

    state = {
        itemNumber: null,
        supplierNumber: null,
        typeOfInput: null,
        productionWeek: null,
        comments: null,
        attachments: [],
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    handleAttachPress = () => {
        console.log('hej')
    }


    render() {
      const {navigate} = this.props.navigation;
      return (
        <ScrollView>
            
            <Modal />
            <View style={styles.container}>
                {/* Form group 1 */}
                <View style={styles.formGroup}>

                    {/* Item number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Item number"
                            onChangeText={(text) => this.setState({itemNumber: text})}
                            value={this.state.itemNumber}
                        />
                    </View>

                    {/* Supplier number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Supplier number"
                            onChangeText={(text) => this.setState({supplierNumber: text})}
                            value={this.state.supplierNumber}
                        />
                    </View>
                
                {/* End form group 1 */}
                </View>

                {/* Form group 2 */}
                <View style={styles.formGroup} >
                    <Picker
                        selectedValue={this.state.typeOfInput}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => this.setState({typeOfInput: itemValue})}>
                            <Picker.Item label="Idea" value="idea" />
                            <Picker.Item label="Recurring problem" value="recurring problem" />
                    </Picker>
                </View>

                {/* Form group 3 */}
                <View style={styles.formGroup} >
        
                    {/* Production week input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Production week (YYWW)"
                            onChangeText={(text) => this.setState({productionWeek: text})}
                            value={this.state.productionWeek}
                        />
                    </View>

                    {/* Comments input */}
                    <View style={styles.form} >
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            style={styles.textArea}
                            placeholder="Comments"
                            onChangeText={(text) => this.setState({comments: text})}
                            value={this.state.comments}
                        />
                    </View>

                {/* End form group 3 */}
                </View>

                <Button onPress={this.handleSubmit} title='Send' />

            </View>

        </ScrollView>
      );
    }
  }

  const styles = {
      container: {
          justifyContent: 'center',
          alignItems: 'center'
      },
      formGroup: {
          backgroundColor: 'white',
          elevation: 4,
          margin: 8
      },
      form: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
      },
      input: {
          height: 50,
          padding: 8,
          width: 340
      },
      textArea: {
        padding: 8,
        width: 340
      }
  }

  export default SendFeedback;