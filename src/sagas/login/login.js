import { put, takeEvery, call } from 'redux-saga/effects'
import { loginAPI } from '../../API/login/login'
import { SUBMIT_FORM } from '../../consts/CONSTS'

export function* login(action) {
    try {
        yield put({type: SUBMIT_FORM.REQUEST})
        const body = yield call(loginAPI, action.data.id, action.data.nickname, action.data.password)
        yield put({type: SUBMIT_FORM.SUCCESS, payload: body})
    } catch(error) {
        yield put({type: SUBMIT_FORM.ERROR})
    }
}

export function* loginWatch() {
    yield takeEvery('SUBMIT_FORM_W', login)
}