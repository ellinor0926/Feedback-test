import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
class ExampleDropdown extends Component {
  render() {
    const { data, label } = this.props;
 
    return (
        
      <Dropdown
        label={label}
        data={data}
        fontSize={14}
        
      />
    );
  }
}


export default ExampleDropdown;