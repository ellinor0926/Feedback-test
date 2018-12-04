import React from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import Scanner from '../Components/Scanner';

export default class ScannerScreen extends React.Component {

  render() {

    return (
    <View  style={{ flex: 1 }} >
        <Scanner />
        <KeyboardAvoidingView style={{ flex: 1,backgroundColor: 'white' }}>
            {/* Form group 1 */}
                <View style={styles.formGroup}>

                    {/* Item number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Item number"
                            
                        />
                    </View>

                    {/* Supplier number input */}
                    <View style={styles.form} >
                        <TextInput
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholder="Supplier number"
                            
                        />
                    </View>
                
                {/* End form group 1 */}
                </View>
        </KeyboardAvoidingView>
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