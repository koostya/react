import { put, takeEvery, call } from 'redux-saga/effects'
import { loginAPI } from '../../API/login/login'

export function* login(action) {
    try {
        const body = yield call(loginAPI, action.data.id, action.data.nickname, action.data.password)
        yield put({type: "SUBMIT_FORM", payload: body})
    } catch(error) {}
}

export function* loginWatch() {
    yield takeEvery('SUBMIT_FORM_W', login)
}