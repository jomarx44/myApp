import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({ text, style, textStyles }) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style
      }}>
      <Text style={{ ...textStyles }}>{text}</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})
