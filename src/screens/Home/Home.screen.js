import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Label, Wrapper } from '../../components'

const Home = ({ navigation }) => {
  return (
    <Wrapper style={styles.main}>
      <Label
        text={'WELCOME !!'}
        style={styles.label}
        textStyles={styles.labelText}
      />
      <View>
        <Button
          onPress={() => {
            navigation.replace('Auth')
          }}
          text="Logout"
          buttonStyle={styles.button}
          textStyles={styles.buttonText}
        />
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  main: { justifyContent: 'center' },
  label: { height: '10%' },
  labelText: { fontSize: 20, fontWeight: '800' },
  button: {
    backgroundColor: '#EE4B2B',
    marginTop: 30,
    marginBottom: 10
  },
  buttonText: { color: '#000' }
})

export default Home
