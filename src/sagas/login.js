import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import { loginAPI } from '../API/login'

export function* login(action) {
    try {
        console.log(action)
        const body = yield call(loginAPI(action.data.id, action.data.nickname, action.data.password))
        yield put({type: "SUBMIT_FORM", payload: {body}})
    } catch(error) {}
}

export function* loginWatch() {
    yield takeEvery('SUBMIT_FORM_W', login)
}