import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const ItexTextInput = ({ onChange, value, placeholder, secure = false }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={txt => onChange(txt)}
      value={value}
      placeholderTextColor="#808080"
      style={styles.textInput}
      secureTextEntry={secure}
    />
  )
}

export default ItexTextInput

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5
  }
})
