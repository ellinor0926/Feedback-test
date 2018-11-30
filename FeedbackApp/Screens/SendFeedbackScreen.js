import React from 'react';
import { View, Button, TextInput, Picker, Keyboard, ScrollView, Animated } from 'react-native';
import Modal from '../Components/Modal';

class SendFeedback extends React.Component {
    constructor(props) {
        super(props);
    
        this.keyboardHeight = new Animated.Value(0);
    
      }
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

    handleOpenCamera = () => {
        console.log('This should navigate to camera screen');
        this.props.navigation.navigate('Camera')
    }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
    
  _keyboardDidShow = (event) => {
      Animated.parallel([
        Animated.timing(this.keyboardHeight, {
          duration: event.duration,
          toValue: event.endCoordinates.height,
        }),
        
      ]).start();
    };
    
    _keyboardDidHide = (event) => {
      Animated.parallel([
        Animated.timing(this.keyboardHeight, {
          // duration: event.duration,
          toValue: 0,
        }),
        
      ]).start();
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>
            <ScrollView>
          
                <Modal openCamera={this.handleOpenCamera} />
          
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

            </ScrollView>
        </Animated.View>
      );
    }
  }

  const styles = {
      container: {
          justifyContent: 'center',
          alignItems: 'center',
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
