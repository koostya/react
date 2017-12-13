import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import { getUsers } from '../API/user'

export function* test() {
    try {
        const users = yield call(getUsers)
        yield put({type: "SET_LIST_OF_USERS", payload: {users}})
    } catch(error) {}
}

export function* testWrap() {
    yield takeEvery('GET_USERS', test)
}