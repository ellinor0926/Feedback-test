import React from 'react';
import { View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import Scanner from '../Components/Scanner';

export default class ScannerScreen extends React.Component {

    state = {
        itemNumber: null,
        supplierNumber: null
    }

    handleBarCodeRead = (itemNumber, supplierNumber) => {
        this.setState({
            itemNumber, supplierNumber
        })
    }

    ok = () => {
        this.props.navigation.navigate('Send', {itemNumber: this.state.itemNumber, supplierNumber: this.state.supplierNumber})
    }

  render() {
    const { ok } = this.props;

    return (
    <View  style={{ flex: 1 }} >

        <Scanner onBarCodeRead={this.handleBarCodeRead} />

        <KeyboardAvoidingView style={{ flex: 1,backgroundColor: 'white' }}>
            {/* Form group 1 */}
                <View style={styles.formGroup}>

                    {/* Item number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Item number"
                            value={this.state.itemNumber}
                            
                        />
                    </View>

                    {/* Supplier number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Supplier number"
                            value={this.state.supplierNumber}
                        />
                    </View>
                
                {/* End form group 1 */}
                </View>
        </KeyboardAvoidingView>

        <Button title='OK' onPress={this.ok} />
        
    </View>
    )
    
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