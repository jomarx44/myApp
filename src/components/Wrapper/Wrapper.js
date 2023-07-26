import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wrapper = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 12 }
})
