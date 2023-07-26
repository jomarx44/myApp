import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Label from '../Label/Label'
import { StyleSheet } from 'react-native'

const Button = ({ onPress, text, buttonStyle, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...buttonStyle }}>
      <Label text={text} textStyles={textStyles} />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})
