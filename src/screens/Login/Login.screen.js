import { Alert, StyleSheet, View } from 'react-native'
import React from 'react'
import { Label, ItexTextInput, Wrapper, Button } from '../../components/index'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendOTPActions } from '../../services/ItexActions'
const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const { user, SMS } = useSelector(state => state.ItexReducer)
  const [isUsername, setUsername] = useState('')
  const [isPassword, setPassword] = useState('')

  const handleLogin = () => {
    const isUsersValid = user.some(
      item =>
        (item.username === isUsername || item.phonenumber == isUsername) &&
        item.password === isPassword
    )
    if (isUsersValid) {
      let mobileNumber = user?.filter(
        item => item.username == isUsername || item.phonenumber == isUsername
      )
      mobileNumber = mobileNumber[0]?.phonenumber.substring(1)
      const params = {
        to: `+63${mobileNumber}`,
        message: 'Login success notification'
      }
      dispatch(sendOTPActions(params))
      Alert.alert('Success!', 'We sent you a notification via SMS', [
        { text: 'Ok', onPress: () => navigation.replace('Dashboard') }
      ])
    } else {
      Alert.alert('Error', 'Invalid account')
    }
  }
  return (
    <Wrapper style={styles.main}>
      <Label
        text={'Login'}
        style={styles.label}
        textStyles={styles.labelText}
      />
      <View>
        <ItexTextInput
          onChange={txt => {
            setUsername(txt)
          }}
          value={isUsername}
          placeholder={'username or phonenumber'}
        />
        <ItexTextInput
          onChange={txt => setPassword(txt)}
          value={isPassword}
          placeholder={'Password'}
          secure={true}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            handleLogin()
          }}
          text="Login"
          buttonStyle={styles.loginButton}
          textStyles={styles.signUpButtonText}
        />
        <Button
          onPress={() => {
            navigation.navigate('Register')
          }}
          text="Sign up"
          buttonStyle={styles.signUpButton}
          textStyles={styles.signUpButtonText}
        />
      </View>
    </Wrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  main: { justifyContent: 'center' },
  label: { height: '10%' },
  labelText: { fontSize: 20, fontWeight: '800' },
  loginButton: {
    backgroundColor: '#1AA7EC',
    marginTop: 30,
    marginBottom: 10
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#808080'
  },
  signUpButtonText: { color: '#000' }
})
