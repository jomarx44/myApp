import { ItexActionTypes } from './ItexTypes'

export const registerActions = payload => ({
  type: ItexActionTypes.REGISTER_USER,
  payload
})

export const loginActions = () => ({
  type: ItexActionTypes.LOGIN_USER
})

export const sendOTPActions = payload => ({
  type: ItexActionTypes.SEND_OTP_NOTIFICATIONS,
  payload
})
