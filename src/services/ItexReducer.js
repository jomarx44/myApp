/* eslint-disable no-console */
import { ItexActionTypes } from './ItexTypes'

const initialState = {
  user: [],
  SMS: ''
}
export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ItexActionTypes.REGISTER_USER:
      return {
        ...state,
        user: [...initialState.user, payload]
      }
    case ItexActionTypes.LOGIN_USER:
      return {
        ...state
      }
    case ItexActionTypes.SEND_OTP_NOTIFICATIONS:
      return {
        ...state,
        SMS: payload
      }
    default:
      return state
  }
}
