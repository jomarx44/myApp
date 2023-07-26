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
  try {
    fetch(`${TWILIO_BASEURL}/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${TWILIO_AUTHORIZATION}`
      },
      body: new URLSearchParams({
        To: to,
        From: TWILIO_PHONE_NUMBER,
        Body: message
      })
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
