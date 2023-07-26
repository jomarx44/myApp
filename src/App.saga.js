import { all } from 'redux-saga/effects'
import ItexSaga from './services/ItexSaga'
export default function* appSaga() {
  yield all([ItexSaga])
}
