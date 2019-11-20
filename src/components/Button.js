import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

class Button extends Component {

  handleOperation = () => {
    this.props.operator(this.props.number)
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operator(this.props.number)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.number}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 30
  }
})

export default Button;
