import { put, takeEvery, call } from 'redux-saga/effects'
import { appLoadAPI } from '../../API/initial/appLoad'

export function* appLoad(action) {
    try {
        const body = yield call(appLoadAPI, action.data.name)
        yield put({type: "GET_ITEMS_FOR_USER", payload: {body}})
    } catch(error) {}
}

export function* appLoadWatch() {
    yield takeEvery('GET_ITEMS_FOR_USER_W', appLoad)
}
