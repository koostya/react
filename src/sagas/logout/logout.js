import { put, takeEvery } from 'redux-saga/effects'
import { history } from '../../index'

export function* logout(action) {
    localStorage.clear()
    history.push('/login')  
    try {
        yield put({type: "LOGOUT"})
    } catch(error) {}
}

export function* logoutWatch() {
    yield takeEvery('LOGOUT_W', logout)
}