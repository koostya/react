import { put, takeEvery, call } from 'redux-saga/effects'
import { regisAPI } from '../../API/registration/registration'

export function* regis(action) {
    try {
        const body = yield call(regisAPI, action.data.id, action.data.nickname, action.data.name, action.data.surname, action.data.phone, action.data.password)
        yield put({type: "REGISTRATION", payload: {body}})
    } catch(error) {}
}

export function* regisWatch() {
    yield takeEvery('REGISTRATION_W', regis)
}
