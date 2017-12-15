import { put, takeEvery, call } from 'redux-saga/effects'
import { appLoadAPI } from '../../API/initial/appLoad'
import { GET_ITEMS_FOR_USER } from '../../consts/CONSTS'

export function* appLoad(action) {
    try {
        yield put({type: GET_ITEMS_FOR_USER.REQUEST})
        const body = yield call(appLoadAPI, action.data.name)
        yield put({type: GET_ITEMS_FOR_USER.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: GET_ITEMS_FOR_USER.ERROR})        
    }
}

export function* appLoadWatch() {
    yield takeEvery('GET_ITEMS_FOR_USER_W', appLoad)
}
