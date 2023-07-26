/* eslint-disable no-console */
import { takeLatest, all } from 'redux-saga/effects'
import { ItexActionTypes } from './ItexTypes'
import {
  TWILIO_ACCOUNT_SID,
  TWILIO_BASEURL,
  TWILIO_PHONE_NUMBER,
  TWILIO_AUTHORIZATION
} from '../utils/constant'

function* sendSMS({ payload }) {
  const { to, message } = payload
  let details = {
    To: to,
    From: TWILIO_PHONE_NUMBER,
    Body: message
  }
  let formBody = []
  for (let property in details) {
    var encodedKey = encodeURIComponent(property)
    var encodedValue = encodeURIComponent(details[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  formBody = formBody.join('&')
  try {
    fetch(`${TWILIO_BASEURL}/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${TWILIO_AUTHORIZATION}==`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then(res => res.json())
      .then(data => console.log('RESPONSE !', data))
      .catch(err => console.log('ERROR !', err))
  } catch (error) {
    console.error('Error sending SMS:', error.message)
  }
}

export default all([
  takeLatest(ItexActionTypes.SEND_OTP_NOTIFICATIONS, sendSMS)
])
