import React, {Component} from 'react';
import { View, Button, TextInput, Keyboard, ScrollView, Animated } from 'react-native';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc';
import Modal from '../Components/Modal';
import ScanButton from '../Components/ScanButton';
import { Dropdown } from 'react-native-material-dropdown';

class SendFeedback extends Component {
    static navigationOptions = {
      title: 'Send Feedback',
    };
    
    constructor(props) {
        super(props);
    
        this.keyboardHeight = new Animated.Value(0);
    
    }
    componentDidMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isFocused && nextProps.isFocused) {
          // screen enter (refresh data, update ui ...)
          this.setState({
              itemNumber: this.props.navigation.getParam('itemNumber'),
              supplierNumber: this.props.navigation.getParam('supplierNumber')
          })
        }
        if (this.props.isFocused && !nextProps.isFocused) {
          // screen exit
        }
      }
     
      shouldComponentUpdate(nextProps) {
        // Update only once after the screen disappears
        if (this.props.isFocused && !nextProps.isFocused) {
          return true
        }
     
        // Don't update if the screen is not focused
        if (!this.props.isFocused && !nextProps.isFocused) {
          return false
        }
     
        // Update the screen if its re-enter
        return !this.props.isFocused && nextProps.isFocused
      }

    state = {
        itemNumber: null,
        supplierNumber: null,
        typeOfInput: '',
        productionWeek: null,
        comments: null,
        attachments: [],
    }



    handleSubmit = () => {
        console.log('submit', this.state)

       const productionWeek = Number(this.state.productionWeek);

        this.setState({
            itemNumber: null,
            supplierNumber: null,
            productionWeek: null,
            typeOfInput: '',
            comments: null,
            attachments: [],
        })

    }

    validateInputs = (value, stateKey, requiredLength) => {

        this.setState({
            [stateKey]: Number(value)
        })

        if(value.length === requiredLength) {
            console.log('valid')
            return 'valid'
        } else {
            return 'notvalid'
        }

    }

    handleOpenCamera = () => {
        this.props.navigation.navigate('Camera')
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

    handleDropdownSelect = (value) => {
        this.setState({typeOfInput: value})
    }

    
    render() {
        const {navigate} = this.props.navigation;
        const { params } = this.props.navigation.state;
        const {navigation} = this.props;
        
        console.log('in render ', navigation.getParam('itemNumber'))
        // console.log(this.props.navigation.getParam('itemNumber', null))
        console.log(this.state)

      return (
        <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>

            <ScrollView>
                <View style={styles.header}>
                    <Modal openCamera={this.handleOpenCamera} />
                    <ScanButton onScanPress={() => navigate('Scanner')} />
                </View>

                <View style={styles.formGroup}>
                    
                    {/* Item number input */}
                    <TextInput
                        keyboardType={'phone-pad'}
                        style={styles.input}
                        placeholderTextColor='rgba(0, 0, 0, .38)'
                        placeholder="Item number"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.itemNumber}
                        maxLength={8}
                    />
                    

                    {/* Supplier number input */}
                    <View style={styles.form} />
                    <TextInput
                        keyboardType='phone-pad'
                        style={styles.input}
                        placeholderTextColor='rgba(0, 0, 0, .38)'
                        placeholder="Supplier number"
                        onChangeText={(text) => this.setState({supplierNumber: text})}
                        value={this.state.supplierNumber}
                        maxLength={5}
                    />
                    
                    <View style={styles.form} />

                    {/* Type of Input */}
                    <View style={styles.dropdown} >
                        <Dropdown 
                            label='Type of feedback' 
                            data={[{value: 'Idea'}, {value: 'Recurring problem'}, {value: 'Internal damage'}, {value: 'Other'}]} 
                            onChangeText={this.handleDropdownSelect}
                            value={this.state.typeOfInput}
                        />
                    </View>
                
                    {/* Production week input */}
                    <TextInput
                        keyboardType='phone-pad'
                        style={styles.input}
                        placeholderTextColor='rgba(0, 0, 0, .38)'
                        placeholder="Production week (YYWW)"
                        onChangeText={(text) => this.setState({productionWeek: text})}
                        value={this.state.productionWeek}
                        maxLength={4}
                    />
                    
                    <View style={styles.form} />

                    {/* Comments input */}
                    <TextInput
                        placeholder="Comments"
                        multiline={true}
                        placeholderTextColor='rgba(0, 0, 0, .38)'
                        style={styles.input}
                        onChangeText={(text) => this.setState({comments: text})}
                        value={this.state.comments}
                        autoCapitalize='sentences'
                    />

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
      header: {
          flexDirection: 'row',
          padding: 8,
          justifyContent: 'space-around'
      },
      formGroup: {
          backgroundColor: 'white',
          elevation: 2,
          margin: 8
      },
      form: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        width: '95%',
        alignSelf: 'center',
      },
      input: {
          height: 60,
          padding: 8,
          width: 340,
        
      },
      textArea: {
        padding: 8,
        width: 340,
      },
      dropdown: {
        width: '95%',
        alignSelf: 'center'
      },
      placeholder: {
          color: 'black'
      }
  }

  export default withNavigationFocus(SendFeedback);
