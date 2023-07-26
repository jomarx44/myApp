import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ItexTextInput, Label, Wrapper } from '../../components'
import { useState } from 'react'
import { formDetails } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { registerActions, sendOTPActions } from '../../services/ItexActions'

const Register = ({ navigation }) => {
  const dispatch = useDispatch()
  const { user, SMS } = useSelector(state => state.ItexReducer)
  const [isTextInput, setTextInput] = useState(formDetails)
  const handleRegister = () => {
    const isInvalid = isTextInput.some(item => item.value === '')
    if (isInvalid) {
      Alert.alert('Warning!', 'Please input your data.')
    } else {
      const usersData = isTextInput.map((val, idx) => {
        return val.value
      })
      const params = {
        lastname: usersData[0],
        firstname: usersData[1],
        middlename: usersData[2],
        phonenumber: usersData[3],
        username: usersData[4],
        password: usersData[5]
      }

      const alreadyExist = user?.some(
        item =>
          item.username === params.username ||
          item.phonenumber === params.phonenumber
      )
      if (alreadyExist) {
        Alert.alert('Warning!', 'Please use different username and phonenumber')
      } else {
        // TODO: UNCOMMENT IF YOU WANT TO SEND SMS AFTER REGISTRATION
        // let mobileNumber = params.phonenumber.substring(1)
        // const params = {
        //   to: `+63${mobileNumber}`,
        //   message: 'Success registration notification'
        // }
        // dispatch(sendOTPActions(params))
        dispatch(registerActions(params))
        Alert.alert('Success!', 'We sent you a notification message via SMS', [
          { text: 'Ok', onPress: () => navigation.navigate('Login') }
        ])
      }
    }
  }
  const onChange = (id, txt) => {
    setTextInput(prevInputs =>
      prevInputs.map(input =>
        input.id === id ? { ...input, value: txt } : input
      )
    )
  }
  return (
    <Wrapper style={styles.wrapper}>
      <Label
        text={'Sign up'}
        style={styles.label}
        textStyles={styles.textLabel}
      />
      <View>
        {isTextInput.map((val, idx) => (
          <ItexTextInput
            key={val.id}
            onChange={txt => {
              onChange(val.id, txt)
            }}
            value={val.value}
            placeholder={val.placeHolder}
            secure={val.secure}
          />
        ))}
      </View>
      <View>
        <Button
          onPress={() => {
            handleRegister()
          }}
          text="Register"
          buttonStyle={styles.button}
        />
      </View>
    </Wrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  textLabel: { fontSize: 20, fontWeight: '800' },
  label: { height: '10%' },
  wrapper: { justifyContent: 'center' },
  button: {
    backgroundColor: '#1AA7EC',
    marginTop: 30,
    marginBottom: 10
  }
})
