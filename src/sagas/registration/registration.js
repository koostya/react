import { put, takeEvery, call } from 'redux-saga/effects'
import { regisAPI } from '../../API/registration/registration'
import { REGISTRATION } from '../../consts/CONSTS'

export function* regis(action) {
    try {
        yield put({type: REGISTRATION.REQUEST})        
        const body = yield call(regisAPI, action.data.id, action.data.nickname, action.data.name, action.data.surname, action.data.phone, action.data.password)
        yield put({type: REGISTRATION.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: REGISTRATION.ERROR})                
    }
}

export function* regisWatch() {
    yield takeEvery('REGISTRATION_W', regis)
}
